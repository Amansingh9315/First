import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  title:string="Binding"
  name:string=""

  changetitle(){
    this.title="Event Binding is Perform"
  }
  
}
