import { OffreResponse } from 'src/app/_model/response/offre-response';
import { OffreService } from './../../../_service/offre.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.css']
})
export class ListOffresComponent implements OnInit {


  offres: OffreResponse[] = []
  constructor(private offreService: OffreService) { }
  ngOnInit(): void {
    this.allOffres();
  }


  allOffres() {
    this.offreService.getAll().subscribe(
      (req: any) => {
          this.offres = req
          console.log(req)
      },
      (err : any)=>{
        Swal.fire('Oops', err, 'warning');
      }
      );


  }

}
