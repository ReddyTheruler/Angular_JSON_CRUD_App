import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';



export const routes: Routes = [  
  { path: '', component: ListEmpComponent, pathMatch: 'full' },  
  { path: 'list-emp', component: ListEmpComponent },  
  { path: 'add-emp', component: AddEmpComponent }  
]; 



@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    ListEmpComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,  
    AppRoutingModule,  
    ReactiveFormsModule,
    RouterModule.forRoot(routes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
