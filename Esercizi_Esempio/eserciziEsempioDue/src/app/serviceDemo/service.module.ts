import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ServiceDemoComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ServiceDemoComponent
  ]
  
  
})
export class ServiceModule { }
