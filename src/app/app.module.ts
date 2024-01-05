import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_component/authentication/login/login.component';
import { RegisterComponent } from './_component/authentication/register/register.component';
import { SoumissionComponent } from './_component/User/soumission/soumission.component';
import { OffreService } from './_service/offre.service';
import { CreateOffreComponent } from './_component/offre/create-offre/create-offre.component';
import { ReadOffreComponent } from './_component/offre/read-offre/read-offre.component';
import { UpdateOffreComponent } from './_component/offre/update-offre/update-offre.component';
import { HomeComponent } from './_component/home/home.component';
import { ListOffresComponent } from './_component/offre/list-offres/list-offres.component';
import { CreateRecruterComponent } from './_component/recruter/create-recruter/create-recruter.component';
import { ListRecruterComponent } from './_component/recruter/list-recruter/list-recruter.component';
import { UpdateRecruterComponent } from './_component/recruter/update-recruter/update-recruter.component';
import { ReadRecruterComponent } from './_component/recruter/read-recruter/read-recruter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SoumissionComponent,
    CreateOffreComponent,
    ReadOffreComponent,
    UpdateOffreComponent,
    HomeComponent,
    ListOffresComponent,
    CreateRecruterComponent,
    ListRecruterComponent,
    UpdateRecruterComponent,
    ReadRecruterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [OffreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
