import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

//This component is a test for services connection with child componenets
export class TestComponent implements OnInit {

  message: string = "bigtest";
  constructor(private generalService: GeneralService) { }
  
  ngOnInit(): void {
    this.message = this.generalService.getMessage(); 
    //console.log(this.message)
  }

}
