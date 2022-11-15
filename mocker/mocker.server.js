const fs = require('fs');
const jsonServer = require('json-server');
const server = jsonServer.create();

server.use(jsonServer.bodyParser);

server.get('/', (req, res, next) => {
    res.status(200).json({ "version": "1.1.0" });
});

server.post('/test-post', (req, res, next) => {

    const response = JSON.parse(JSON.stringify(req.body, null, 2));

    res.status(200).json(response);

});

server.post('/authentication-service/authentication/v1/refresh-token', (req, res, next) => {

    const response = {
        'accessToken': 'token-2',
        'refreshToken': 'refreshToken-2'
    };

    setTimeout(() => {
        res.status(200).json(response);
    }, 2000);

});

fs.readdir('./mocker/data/', (err, files) => {

    files.forEach(file => {

        const endpoint = require('./data/' + file);

        try {

            if (!endpoint.url) {
                throw Error;
            }

            const url = endpoint.url;
            const method = !endpoint.method ? 'get' : endpoint.method;
            const code = !endpoint.code ? 200 : endpoint.code;
            const response = !endpoint.responseBody ? '{}' : endpoint.responseBody;
            const useDelay = !endpoint.delay ? false : true;
            server[method](url, (req, res, next) => {

                if (useDelay) {
                    setTimeout(() => {
                        res.status(code).json(response);
                    }, endpoint.delay);
                } else {
                    res.status(code).json(response);
                }

            });

        } catch (e) {
            console.log(e);
        }

    });

});

const port = 3040;

server.listen(port, () => {
    console.log(`Mockup Server Listening on port ${port}`);
});