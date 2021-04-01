import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { from } from 'rxjs';
import { AservicesComponent } from './aservices/aservices.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { TempConversionPipe } from './temp-conversion.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { HttpClientComponent } from './http-client/http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    EmpInfoComponent,
    FormComponentComponent,
    AservicesComponent,
    LoginComponent,
    HomeComponent,
    DemopipesComponent,
    TempConversionPipe,
    ReactiveFormComponent,
    ExponentialStrengthPipe,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
