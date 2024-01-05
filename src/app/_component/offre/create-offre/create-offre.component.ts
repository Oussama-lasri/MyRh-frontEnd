import { OffreRequest } from './../../../_model/request/offre-request';
import { LoginRequest } from './../../../_model/request/auth/login-request';
import { OffreService } from './../../../_service/offre.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.css']
})
export class CreateOffreComponent {


  constructor(private offreService :OffreService){}


  offreForm = new FormGroup({
    titre: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    niveauEducation: new FormControl(null, [Validators.required]),
    ville: new FormControl(null, [Validators.required]),
    salaire: new FormControl(null, [Validators.required]),
    profilRechecher: new FormControl(null, [Validators.required]),
   // status: new FormControl("EN_COURS", [Validators.required]),
    //recruteur_id: new FormControl(7, [Validators.required]),
  })


  submitForm(){
    const OffreRequest : OffreRequest = {
     
      titre : this.offreForm.get('titre')?.value! ,
      description : this.offreForm.get('description')?.value! ,
      niveauEducation : this.offreForm.get('niveauEducation')?.value! ,
      profilRechecher : this.offreForm.get('profilRechecher')?.value! ,
      ville : this.offreForm.get('ville')?.value! ,
      salaire : this.offreForm.get('salaire')?.value! ,
      status: "EN_COURS",
      recruteur_id: 7,
    } 

    
    this.offreService.addOffre(OffreRequest).subscribe((req : any)=>{
      console.log(req)
    },
    (err : any)=>{
      console.log(err);
    }
    )
  }

}
