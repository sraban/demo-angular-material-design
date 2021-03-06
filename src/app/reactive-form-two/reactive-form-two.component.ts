import {Component,OnInit , ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  

@Component({
  selector: 'app-reactive-form-two',
  templateUrl: './reactive-form-two.component.html',
  styleUrls: ['./reactive-form-two.component.css']
})
export class ReactiveFormTwoComponent implements OnInit {
  
  //@ViewChild('r') ref:ElementRef<any>;
  
  ngOnInit() {
    //(<any>this.ref).disabled = false;
    this.regiForm.controls['DOB'].disable();
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
      'FirstName' : [{value:'Sraban', disabled : true}, Validators.required],  
      'LastName' : ['Kumar', Validators.required],  
      'Address' : ['aa aaa aaa aaa aaa aaa aaa aaa', Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],  
      'DOB' : ['2019-07-18', Validators.required],  
      'Gender':['Male', Validators.required],  
      'Blog':['1', Validators.required],  
      'Email':['skp.pvt@gmail.com', Validators.compose([Validators.required,Validators.email])],  
      'IsAccepted':[false]  
    });

  }  
  
  // On Change event of Toggle Button  
  onChange(event:any)  
  {  
    
    if (event.checked == true) {  
      this.IsAccepted = 1;
      //(<any>this.ref).disabled = true;
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
