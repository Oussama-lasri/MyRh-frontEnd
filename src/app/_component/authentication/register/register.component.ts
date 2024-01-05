
import { AuthService } from './../../../_service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth :AuthService){

  }

  Register(){
    this.auth.register().subscribe((res : any)=> {
      console.log(res);
    })
  }

  
  

}
