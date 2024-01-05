import { UserService } from './../../../_service/user.service';
import { OffreService } from './../../../_service/offre.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoumissionOffreRequest } from 'src/app/_model/request/user/soumission-offre-request';
import { OffreResponse } from 'src/app/_model/response/offre-response';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-read-offre',
  templateUrl: './read-offre.component.html',
  styleUrls: ['./read-offre.component.css']
})
export class ReadOffreComponent implements OnInit {

  offerId!: number;
  offreDetail: OffreResponse | undefined;
  file: any | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router
    , private offreService: OffreService
    , private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.offerId = +params['id'];
      console.log('Offer ID:', this.offerId);
    });

    this.readOffre(this.offerId);

  }


  readOffre(id: any) {
    this.offreService.findById(id).subscribe(
      (req: OffreResponse) => {
        this.offreDetail = req
      },
      (err: any) => {
        console.log(err);
      }
    )
  }





  fileUplaod(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.file = files[0];
      console.log(this.file)
    }
  }

  submit() {

    const soumisssionOffreRequest: SoumissionOffreRequest = {
      offre_id: this.offerId,
      file: this.file,
    }

    Swal.fire({

      title: 'Are you sure want to Add to competition?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, do it!',
      cancelButtonText: 'No, keep it'

    }).then((result) => {
      if (result.value) {

        
        this.userService.soumissionToOffre(soumisssionOffreRequest).subscribe((res: any) => {
          console.log(res.message);
          Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
          this.router.navigate(['/']);

        },
          (error: HttpErrorResponse) => {

            console.error('Error:', error);

            if (error.error && error.error.message) {
              const errorMessage = error.error.message;
              Swal.fire('Not added', errorMessage, 'warning')
              console.log('Custom Error Message:', errorMessage);
            }
          })



      } else if (result.dismiss === Swal.DismissReason.cancel) {

        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error')
      }
    })


    // if (this.file) {

    //   this.userService.soumissionToOffre(soumisssionOffreRequest).subscribe(
    //     (req: any) => {
    //       Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
    //       this.router.navigate(['/']);
    //     },
    //     (error: HttpErrorResponse) => {
    //       if (error.error && error.error.message) {
    //         const errorMessage = error.error.message;
    //         Swal.fire(
    //           'Not added', errorMessage, 'warning')
    //       }
    //     }
    //   )
    // } 
    
  }
}







