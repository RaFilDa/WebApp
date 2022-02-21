import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatSelectModule} from "@angular/material/select";
import { ReactiveFormsModule} from "@angular/forms";
import { MatInputModule} from '@angular/material/input'
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { MatDividerModule } from "@angular/material/divider";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatGridListModule} from "@angular/material/grid-list";
import { GroupsContentComponent } from './groups-content/groups-content.component';
import { SettingsContentComponent } from './settings-content/settings-content.component';
import { SettingsGeneralContentComponent } from './settings-general-content/settings-general-content.component';
import { SettingsLogsContentComponent } from './settings-logs-content/settings-logs-content.component';
import { SettingsUsersContentComponent } from './settings-users-content/settings-users-content.component';
import { MatTableModule } from "@angular/material/table";
import { ReportsPopupComponent } from "./_popups/reports-popup/reports-popup.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ClientsPopupComponent } from './_popups/clients-popup/clients-popup.component';
import { MatExpansionModule } from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    GroupsContentComponent,
    SettingsContentComponent,
    SettingsGeneralContentComponent,
    SettingsLogsContentComponent,
    SettingsUsersContentComponent,
    ReportsPopupComponent,
    ClientsPopupComponent,
  ],
  entryComponents: [
    ReportsPopupComponent,
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
    AppRoutingModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
