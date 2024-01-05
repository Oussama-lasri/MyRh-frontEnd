import { Component, OnInit } from '@angular/core';
import { OffreResponse } from 'src/app/_model/response/offre-response';
import { OffreService } from 'src/app/_service/offre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  offers: OffreResponse[] = []


  constructor(private offreService: OffreService) {

  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.offreService.getAll().subscribe((request: any) => {
      console.log(request);
      this.offers = request;
    }
    )
  }

}
