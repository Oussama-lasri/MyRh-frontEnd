import { UserService } from './../../../_service/user.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SoumissionOffreRequest } from 'src/app/_model/request/user/soumission-offre-request';

@Component({
  selector: 'app-soumission',
  templateUrl: './soumission.component.html',
  styleUrls: ['./soumission.component.css']
})
export class SoumissionComponent {
  file: any = null;

  constructor(private userService: UserService) {

  }

  fileUplaod(event: any) {
    this.file = event.target.files[0];
  }

  submit() {
    const soumisssionOffreRequest: SoumissionOffreRequest = {
      offre_id: 1,
      file: this.file,
    }
    this.userService.soumissionToOffre(soumisssionOffreRequest).subscribe(
      (req: any) => {
        console.log(req);
      },
      (err: any) => {
        console.log(err);
      }
    )


  }

}
