import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private activeroute:ActivatedRoute , private userservice:UserService){

  }
  
  user:any=''
  ngOnInit(){
    let id = (this.activeroute.snapshot.params["id"])
    this.userservice.getuserid(id).subscribe((data)=>{
      // console.log(data)
      this.user=data
    })
  }
}
