import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OffreResponse } from '../_model/response/offre-response';
import { environment } from 'src/environments/environment.development';
import { OffreRequest } from '../_model/request/offre-request';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get<OffreResponse[]>(`${environment.apiUrl}/offres`);
  }
  findById(id : any){
    return this.http.get<OffreResponse>(`${environment.apiUrl}/offres/${id}`);
  }
  addOffre(request : OffreRequest){
    // const formData = new FormData();
    // formData.append('',request.);

    return this.http.post(`${environment.apiUrl}/offres`,request);
  }
}
