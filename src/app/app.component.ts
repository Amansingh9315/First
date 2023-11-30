import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  username:string="Parent to Child Component"

  // childata:string=""
  // parentmethod(a){
  //   this.childata= a;
  // }
  // use:string=""
  // data(a){
  //   this.use=a;
  // }
  name:string="This is a input component"

  data:string=""
  handler(d:string){
    this.data=d
  }

  userlogin(data:any){
    console.log(data)
  }

  loginuser(item:any){
    console.log(item)
  }

}
