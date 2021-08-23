import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor( 
    private http:HttpClient
  ) {  }

  apicall(user : String){
      var url = "https://api.agify.io/?name=" + user;
      return this.http.get(url);
      }
      
  }

