import { FormControl, FormGroup, Validators } from "@angular/forms";
export class VerifModel {
    formGroupRegister = new FormGroup({
        jobseekerName: new FormControl("", Validators.required),
        jobseekerLastName: new FormControl("", Validators.required),
        jobseekerEmail: new FormControl("", [Validators.required, Validators.email]),
        jobseekerPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
        jobseekerConfirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    })
}