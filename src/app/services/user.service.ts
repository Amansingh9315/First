import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/catch';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/throw'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
    allusers(){
      return this.http.get("https://jsonplaceholder.typicode.com/comments")
      // .catch((error: any)=>{
      //   return Observable.throw(error);
      // })
    }
    
    getuserid(id:any){
      return this.http.get("https://jsonplaceholder.typicode.com/comments/"+id)
    }

    // savedata(data:any){
    //   return this.http.post("https://jsonplaceholder.typicode.com/users",data)
    // }

      //{
  //   return [
  //     {
  //       id:100,
  //       name:"Aman",
  //       city:"Delhi",
  //       dob:new Date("14/Apr/2002")
  //     },
  //     {
  //       id:101,
  //       name:"Vishal",
  //       city:"Haryana",
  //       dob:new Date("1/Jun/2000")
  //     },
  //     {
  //       id:102,
  //       name:"Abhishek",
  //       city:"Mumbai",
  //       dob:new Date("10/Aug/2001")
  //     },
  //   ]
  // }
}