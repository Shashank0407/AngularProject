import { Component, OnInit } from '@angular/core';
import { User } from '../my-component/my-component.component';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {
  user: User = {};
  detail?: string = "Profile";

  constructor(private router: Router , public dataUtil : DataService) {

   }

  ngOnInit(): void {
    this.user = this.dataUtil.user;
    this.user.age;


  }

  btnClickhome(){
    this.router.navigate(['/']);
  }
  showdetails(flag: number){
    if(flag==1){
      this.detail = this.user.name;
    }
    else if(flag==2){
      this.detail = this.user.age?.toString();
    }
    else if(flag==3){
      this.detail = this.user.count?.toString();
    }
    else if(flag==4){
      this.detail = "Description";
    }
  }

}
