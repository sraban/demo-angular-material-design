import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  

@Component({
  selector: 'app-reactive-form-two',
  templateUrl: './reactive-form-two.component.html',
  styleUrls: ['./reactive-form-two.component.css']
})
export class ReactiveFormTwoComponent implements OnInit {

  ngOnInit() {
  }

  regiForm: FormGroup;  
  FirstName:string='';  
  LastName:string='';  
  Address:string='';  
  DOB:Date=null;  
  Gender:string='';  
  Blog:string='';  
  Email:string='';  
  IsAccepted:number=0;  
  
  constructor(private fb: FormBuilder) {   
  
  
    // To initialize FormGroup  
    this.regiForm = fb.group({  
      'FirstName' : [null, Validators.required],  
      'LastName' : [null, Validators.required],  
      'Address' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],  
      'DOB' : [null, Validators.required],  
      'Gender':[null, Validators.required],  
      'Blog':[null, Validators.required],  
      'Email':[null, Validators.compose([Validators.required,Validators.email])],  
      'IsAccepted':[null]  
    });  
  
  }  
  
  // On Change event of Toggle Button  
  onChange(event:any)  
  {  
    if (event.checked == true) {  
      this.IsAccepted = 1;  
    } else {  
      this.IsAccepted = 0;  
    }  
  }  
  
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form, this.regiForm.value);  
  }  
}
