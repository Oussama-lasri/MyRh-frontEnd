import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecruteurResponse } from '../_model/response/recruteur-response';
import { environment } from 'src/environments/environment.development';
import { RecruterRequest } from '../_model/request/recruter/recruter-request';

@Injectable({
  providedIn: 'root'
})
export class RecruterService {

  constructor(private http : HttpClient) { }
  

  addRecruter(request : RecruterRequest) {
    const formData = new FormData();
    formData.append('phone',request.phone)
    formData.append('email',request.email)
    formData.append('image',request.image)
    formData.append('login',request.login)
    formData.append('password',request.password)
    console.log(formData);
    return this.http.post<RecruteurResponse>(`${environment.apiUrl}/recruteurs`,formData);
  }
}
