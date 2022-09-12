import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralService } from '../shared/services/general.service';

@Component({
  selector: 'app-webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.css']
})
export class WebappComponent implements OnInit {

  constructor(public generalService: GeneralService){ 
  }
  name:string="";
  desc:string="";
  
  people:any[] = new Array();

  //locals:any;
  
  //instantiate a proxy list for local stordesc update
  itemList:any[] = new Array();
 
  //parent function that is called by dialog component
  parentFunction(data:any)
  { 
    let mydata = {name:data.name,desc:data.age}
    //console.warn(data)
    this.people.push(mydata)
    //console.warn(this.people)
    localStorage.setItem(JSON.stringify(mydata.name),JSON.stringify(mydata.desc))
    this.itemList.splice(0,this.itemList.length);//deletes old list
    this.storageUpdate()
    //this.locals=localStordesc.getItem(JSON.stringify(mydata.name))
  }
  
  //getting local stordesc items 
  storageUpdate(): void{ 
    Object.keys(localStorage).forEach(key => {
      let item = key;
      let item1 = localStorage.getItem(key);
      let mydata1 = {name:item.replace(/^"(.+(?="$))"$/, '$1'), desc:item1}
      
      console.log(mydata1);
      this.itemList.push(mydata1);
    });
  }
  
  resolveTicket(){
    
    
  }
  
  ngOnInit(): void {
    this.storageUpdate()
  }
 

}
