import { FileResponse } from "../../response/file-response";

export interface RecruterRequest {
    login : string ;
    email : string ;
    phone : string ;
    password : string ;
    image : any;
}
