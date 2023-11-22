import { Component, EventEmitter, Input ,OnInit,Output } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  fun:string="Aman"
  
  changeName(){
    this.fun="Event Binding is Performed"
  }

  searchtext:any;
  p: number = 1;  
  user:any;
  constructor(private service : UserService){

  }

  errormsg:string="Loading...."
  ngOnInit(){
    // this.user= this.service.allusers();
    this.service.allusers().subscribe((data:any)=>{
      this.user=data;
    })
    
  }

  // userlogin(data:any){
  //   this.service.savedata(data).subscribe((result)=>{
  //     console.log(result)
  //   })
  // }
  // user:string[]=["Aman","Rahul","Vishal"]
  // obj:any[]=[
  //   {
  //     id:100,
  //     name:"Aman",
  //     city:"Delhi",
  //     dob:new Date("5/10/2000")
  //   },
  //   {
  //     id:101,
  //     name:"Karan",
  //     city:"Jaipur",
  //     dob:new Date("5/10/1998")
  //   },
  //   {
  //     id:102,
  //     name:"Vishal",
  //     city:"Mumbai",
  //     dob:new Date("5/10/1985")
  //   }
  // ]
  // isuserloggedin:boolean=false;
  // @Input()
  // uname:string=""

  // @Output()
  // notify:EventEmitter<string> = new EventEmitter<string>();
  // method(){
  //   this.notify.emit("output property");
  // }

}
