import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DialogComponent } from './shared/dialog/dialog.component';
import { GeneralService } from './shared/services/general.service';
import { TestComponent } from './shared/test/test.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebappComponent } from './webapp/webapp.component';
import { UserMasterComponent } from './user-master/user-master.component';



@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TestComponent,
    WebappComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
