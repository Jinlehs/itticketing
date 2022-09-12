import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit {

  
  userList:any; //declare userList
  constructor(private httpClient: HttpClient) {
    this.userList=[];//initialize userList
  }

  ngOnInit(): void {
    this.getUserList()
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

}
