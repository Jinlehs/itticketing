import { Injectable } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  
  //declare variables
  private messageSource = new Subject<string>();
  message:string = "";
  showDialog =  false;
  
  //setter for shared service 
  setMessage(data:string){
    this.messageSource.next(data); 
  }
  
  //getter for shared service 
  getMessage(){ 
    return this.message; 
  }
}
