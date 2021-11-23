import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-reactive-example',
  templateUrl: './form-reactive-example.component.html',
  styleUrls: ['./form-reactive-example.component.css']
})
export class FormReactiveExampleComponent {
  public myForm: FormGroup;
  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      txtNome: ["",[Validators.required,Validators.maxLength(10)]], //["Nome predefinito"]
      txtCognome: ["",[Validators.required,Validators.maxLength(30)]], //["Cognome predefinito"]
      txtEta: ["",[Validators.required,Validators.pattern(/^([0-9]{1,3})$/)]] //["Età predefinito"]
    });
   }
   inviaForm(){
     console.log(this.myForm.value);
   }
}
