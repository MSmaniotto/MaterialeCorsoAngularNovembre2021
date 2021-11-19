import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterpolazioneComponent } from './interpolazione/interpolazione.component';
import { PropertyAttributeBindingComponent } from './property-attribute-binding/property-attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    InterpolazioneComponent,
    PropertyAttributeBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariablesComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
