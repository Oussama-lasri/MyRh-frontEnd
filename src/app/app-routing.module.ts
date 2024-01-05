import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_component/authentication/login/login.component';
import { RegisterComponent } from './_component/authentication/register/register.component';
import { SoumissionComponent } from './_component/User/soumission/soumission.component';
import { ReadOffreComponent } from './_component/offre/read-offre/read-offre.component';
import { HomeComponent } from './_component/home/home.component';
import { ListOffresComponent } from './_component/offre/list-offres/list-offres.component';
import { ReadRecruterComponent } from './_component/recruter/read-recruter/read-recruter.component';
import { ListRecruterComponent } from './_component/recruter/list-recruter/list-recruter.component';
import { UpdateRecruterComponent } from './_component/recruter/update-recruter/update-recruter.component';
import { CreateRecruterComponent } from './_component/recruter/create-recruter/create-recruter.component';
import { UpdateOffreComponent } from './_component/offre/update-offre/update-offre.component';
import { CreateOffreComponent } from './_component/offre/create-offre/create-offre.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: HomeComponent },
  {
    path: 'auth', children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      // {path: ":id/edit" , component: EditMemberComponent},
      // {path: ":id/read" , component: ReadMemberComponent},

    ]
  },
  {
    path: 'user', children: [
      { path: "soumission", component: SoumissionComponent },
      // {path: ":id/edit" , component: EditMemberComponent},
      // {path: ":id/read" , component: ReadMemberComponent},

    ]
  },
  {
    path: 'offres', children: [
      { path: ":id/read", component: ReadOffreComponent },
       { path: "", component: ListOffresComponent },

      // {path: ":id/edit" , component: EditMemberComponent},
      // {path: ":id/read" , component: ReadMemberComponent},

    ]
  },{
    path: 'recruters', children: [
      { path: ":id/read", component: ReadRecruterComponent },
      { path: ":id/edit", component: UpdateRecruterComponent },
      { path: "create", component: CreateRecruterComponent },
      { path: "", component: ListRecruterComponent },

      // {path: ":id/edit" , component: EditMemberComponent},
      // {path: ":id/read" , component: ReadMemberComponent},

    ]
  },
  {
    path: 'offres', children: [
      { path: ":id/read", component: ReadOffreComponent },
      { path: ":id/edit", component: UpdateOffreComponent },
      { path: "create", component: CreateOffreComponent },
      { path: "", component: ListOffresComponent },

      // {path: ":id/edit" , component: EditMemberComponent},
      // {path: ":id/read" , component: ReadMemberComponent},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
