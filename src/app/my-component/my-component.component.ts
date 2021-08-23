import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetApiService } from './get-api.service';
import { DataService } from '../data.service';

export class User {
  constructor (
    public name?: string,
    public age?: number,
    public count?: number
  ) { }
}

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  public nameForm:FormGroup;
  titleapi = 'Call Api in Angular;'
  mysuername: string ="";
  user: User = {};
  notfound: boolean = false;
  found: boolean = false;

  constructor( private formBuilder: FormBuilder, private api:GetApiService, private router: Router, public dataUtil : DataService) { 
    this.nameForm = this.formBuilder.group({
      search: ''
    });

  }
  btnClick(){

    this.mysuername=this.nameForm.get('search')?.value;
    // console.log("NAME>>>>" , this.mysuername);
    this.api.apicall(this.mysuername).subscribe((data: any) => {
      this.user = data;
      // console.log(this.user.age);
      // console.log(this.user);
      if(this.user.age == null){
        this.found = false;
        this.notfound = true;
        // alert("USER NOT FOUND");
        // console.log("If not found", this.notfound);
        // console.log("If found", this.found);
      }
      else{
        this.notfound = false;
        this.found =  true;
        // console.log("Else not found", this.notfound);
        // console.log("Else found", this.found);
        this.dataUtil.user = this.user;
        this.router.navigate(['/profile']);
      }
      this.nameForm.get('search')?.setValue('');
      setTimeout(() => {
        this.notfound = false;
      },2000);

    });

  }
  

  ngOnInit(): void {
  
  }


}
