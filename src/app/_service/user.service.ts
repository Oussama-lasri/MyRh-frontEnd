import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SoumissionOffreRequest } from '../_model/request/user/soumission-offre-request';
import { environment } from 'src/environments/environment.development';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "multipart/form-data"
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private http : HttpClient) { }

  soumissionToOffre(soumissionOffreRequest : SoumissionOffreRequest){

    const formData = new FormData();

          formData.append('file', soumissionOffreRequest.file);
      return this.http.post(`${environment.apiUrl}/offres/${soumissionOffreRequest.offre_id}/soumission`,formData);
  }
}
