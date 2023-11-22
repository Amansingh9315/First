import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { ChildComponent } from './child/child.component';
import { AgePipe } from './pipes/age.pipe';
import {UserService} from './services/user.service'
import {HttpClientModule} from "@angular/common/http"
import {RouterModule,Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserComponent } from './user/user.component';

// const routes:Routes =[
//   {path:"",redirectTo:'users',pathMatch:"full"},
//   {path:'users',component:UsersComponent},
//   {path:'user/:id',component:UserComponent},
//   {path:'child',component:ChildComponent},
//   {path:'binding',component:BindingComponent},
//   {path:"**",redirectTo:"users"}
//]
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    UsersComponent,
    ChildComponent,
    AgePipe,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
    NgxPaginationModule,
    Ng2SearchPipeModule

  ],
  providers:[UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
