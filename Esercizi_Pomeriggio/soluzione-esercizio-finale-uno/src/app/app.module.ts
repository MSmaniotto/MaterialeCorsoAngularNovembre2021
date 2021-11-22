import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ActivateDisableBindingShowComponent } from './activate-disable-binding-show/activate-disable-binding-show.component';
import { LockUnlockInputComponent } from './lock-unlock-input/lock-unlock-input.component';
import { SendDataComponent } from './send-data/send-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivateDisableBindingShowComponent,
    LockUnlockInputComponent,
    SendDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
