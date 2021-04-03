import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AservicesComponent } from './aservices/aservices.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Test1Component } from './test1/test1.component';
import { HttpClientComponent } from './http-client/http-client.component';

const routes: Routes = [
  {path:'angular', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'services',component:AservicesComponent},
  {path:'dependency-injections', component:EmpInfoComponent},
  {path:'form',component:FormComponentComponent},
  {path:'component',component:Test1Component},
  {path:'pipes',component:DemopipesComponent},
  {path:'reactiveForm',component:ReactiveFormComponent},
  {path: 'httpClient1', component:HttpClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
