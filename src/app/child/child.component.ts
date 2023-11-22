import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input()
  // uname:string=""
  title:string="Child component"

  Eventbinding(){
    this.title="Event Binding is performed"
  }

  name:string=""
  @Input()
  uname:string=""

  // notify:EventEmitter<string> = new EventEmitter<string>();

  // button(){
  //   this.notify.emit("Child to Parent component")
  // }

  // user:string[]=["Math","Science","History"]

  obj:any[]=[
    {
      id:100,
      name:"Aman",
      city:"Delhi",
      dob:new Date("14/Apr/2002")
    },
    {
      id:101,
      name:"Vishal",
      city:"Haryana",
      dob:new Date("1/Jun/2000")
    },
    {
      id:102,
      name:"Abhishek",
      city:"Mumbai",
      dob:new Date("10/Aug/2001")
    },
  ]

  isloggedin:boolean = true
  selectedcountry:string=""

  countries:any[]=[
    {
      code:"ind",
      country:"India"
    },
    {
      code:"uae",
      country:"United Arab Emirates"
    },
    {
      code:"pak",
      country:"Pakistan"
    }
  ]
  choice(data:any){
    this.selectedcountry=data.target.value;
    console.log(data)
  }

  @Input()
  fname:string=""

  @Output()
  notify:EventEmitter<string>=new EventEmitter<string>();

  change(){
    this.notify.emit("This is output component")
  }
    
}
