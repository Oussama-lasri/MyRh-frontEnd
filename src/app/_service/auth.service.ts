import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http : HttpClient) {
    
   }

   register(){
    const user = {
      firstName :"oussama" ,
      email : "ousdsamjeja@gmail.com",
      password : "test12345" ,
      lastName : "lasri",
    }
      return this.http.post(`${environment.apiUrl}/auth/register`,user,httpOptions)
   }
   
   
   
}
