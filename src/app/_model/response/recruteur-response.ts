import { FileResponse } from "./file-response";

export interface RecruteurResponse {

      id : number ;
      login : string ;
      email : string ;
      Phone : string ;
      image : FileResponse;
}
