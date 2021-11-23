import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { NgSwitchSampleComponent } from './ng-switch-sample/ng-switch-sample.component';
import { NgForSampleComponent } from './ng-for-sample/ng-for-sample.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormReactiveExampleComponent } from './form-reactive-example/form-reactive-example.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NgIfSampleComponent } from './ng-if-sample/ng-if-sample.component';
import { ChildComponent } from './parent-child/child/child.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { PipesSampleComponent } from './pipes-sample/pipes-sample.component';
import { ServiceModule } from './serviceDemo/service.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NgIfSampleComponent,
    NgSwitchSampleComponent,
    NgForSampleComponent,
    ChildComponent,
    ParentComponent,
    PipesSampleComponent,
    FormExampleComponent,
    FormReactiveExampleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
