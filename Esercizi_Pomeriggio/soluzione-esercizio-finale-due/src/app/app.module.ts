import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailsComponent } from './carPageComponents/car-details/car-details.component';
import { CarAdderComponent } from './carPageComponents/car-adder/car-adder.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarProviderService } from './services/car-provider.service';
import { HttpClientModule } from '@angular/common/http'
import { CarAdderTemplateComponent } from './carPageComponent/car-adder-template/car-adder-template.component';

@NgModule({
  declarations: [
    AppComponent,
    CarAdderComponent,
    CarDetailsComponent,
    CarAdderTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
