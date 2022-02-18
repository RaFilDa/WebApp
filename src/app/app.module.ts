import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input'
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { ClientsContentComponent } from './clients-content/clients-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    LoginscreenComponent,
    ClientsContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot([
      {path: '', component: LoginscreenComponent},
      {path: 'dashboard', component: MyDashboardComponent},
      {path: 'dashboard/clients', component: ClientsContentComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
