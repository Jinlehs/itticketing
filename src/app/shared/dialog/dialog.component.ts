import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  //declare variables needed for dialog functionality 
  userList:any; 
  message="pass message to other component";
  isMenuOpened: boolean = false; 
  selected:string = "";
  
  //output emitted to parent function App component
  @Output() parentFunction:EventEmitter<any> = new EventEmitter(); 
  
  constructor(public generalService: GeneralService, private httpClient: HttpClient) { 
    this.userList=[];//initialize userList
  }
  
  ngOnInit(): void {
    this.getUserList();
  }
  
  //update and send message to app component
  updateMessage(val:string){
    this.message = val;
    this.generalService.setMessage(this.message);
    //console.log("updated Mesage")
    //console.log(this.message)
  }
  
  //menu toggler 
  toggleMenu(): void { 
    this.isMenuOpened = !this.isMenuOpened;
    //console.log(this.userList)
    this.sortList();
    //console.log(this.userList)
  }
  
  //call API to get data function
  getUserList()
  {
    this.httpClient.get('https://services.odata.org/TripPinRESTierService/(S(1iit5imcudlfb3hd1duwtznk))/People')
    .subscribe((result:any)=>
    {
      this.userList=result.value;
    })
  }
  
  //alphabetically sort user list
  sortList(){ 
    this.userList.sort(function(a:any,b:any){
      if (a.UserName > b.UserName){
        return 1; 
      }
      if (a.UserName < b.UserName){
        return -1;
      }
      return 0;
    });
    this.isMenuOpened = true;
  }
  
  
  //get User Input
  displayVal:string="";
  getInput(value:string){
    //console.warn(value);
    this.displayVal = value; 
  }
  
  //indicator to see if we are passing through correct name
  selectedChangeHandler(event:any){
    //console.log(event)
    this.selected=event.target.value;

  }
  
  //sends data to parent function: App Component
  sendData(name:any, desc:string){
    let data = {name:name,age:desc}
    this.parentFunction.emit(data)
  }
  
}
