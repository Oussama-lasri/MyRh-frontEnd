import { Recruteur } from "./recruteur";
import { RecruteurResponse } from "./recruteur-response";

export interface OffreResponse {  
       id : number ;
    
    titre : string ;
    
    description : string ;
    
     niveauEducation :string ;



    salaire : number ;


    profilRechecher : string ;


    status : string ;

     recruteur:  RecruteurResponse;


}

