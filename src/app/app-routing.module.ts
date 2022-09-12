import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { WebappComponent } from './webapp/webapp.component';

const routes: Routes = [
  {path: 'webapp', component:WebappComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
