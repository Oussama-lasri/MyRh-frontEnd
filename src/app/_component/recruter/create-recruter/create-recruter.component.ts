import { RecruterService } from './../../../_service/recruter.service';
import { FileResponse } from './../../../_model/response/file-response';
import { RecruterRequest } from './../../../_model/request/recruter/recruter-request';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-recruter',
  templateUrl: './create-recruter.component.html',
  styleUrls: ['./create-recruter.component.css']
})
export class CreateRecruterComponent {

  file: any;
  imageUrl: string | ArrayBuffer = '';

  constructor(private  recruterService :RecruterService){
  }

  recruterForm = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    label: new FormControl("label", [Validators.required]),
  })



  fileUplaod(event: any) {
    const files = event.target.files;
    if (files.length === 0)
      return;
  


    const file = event.target.files[0];
    this.recruterForm.patchValue({ image: file })
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  submitForm() {
    const recruterRequest: RecruterRequest = {
      login : this.recruterForm.get("login")?.value!  ,
      email : this.recruterForm.get("email")?.value!  ,
      phone : this.recruterForm.get("phone")?.value! ,
      password : this.recruterForm.get("password")?.value! ,
      image : this.recruterForm.get("image")?.value! ,
    }

    console.log(recruterRequest);

    this.recruterService.addRecruter(recruterRequest).subscribe((req : any)=>{
      console.log(req)
    },
    (err : any)=>{
          console.log(err);
    }
    )

  }

}
