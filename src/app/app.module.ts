import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { SettingsContentComponent } from './_content/settings-content/settings-content.component';
import { SettingsGeneralContentComponent } from './_content/settings-content/settings-general-content/settings-general-content.component';
import { SettingsLogsContentComponent } from './_content/settings-content/settings-logs-content/settings-logs-content.component';
import { SettingsUsersContentComponent } from './_content/settings-content/settings-users-content/settings-users-content.component';
import { MatTableModule } from "@angular/material/table";
import { ReportsPopupComponent } from "./_popups/reports-popup/reports-popup.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ClientsPopupComponent } from './_popups/clients-popup/clients-popup.component';
import { MatExpansionModule } from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ConfigCreatePopupComponent } from './_popups/config-create-popup/config-create-popup.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRippleModule} from "@angular/material/core";
import {ScrollingModule} from "@angular/cdk/scrolling";
import { AddUserPopupComponent } from './_popups/add-user-popup/add-user-popup.component';
import { ConfigDestinationContentComponent } from './_popups/config-create-popup/config-destination-content/config-destination-content.component';
import { CronContentComponent } from './_popups/config-create-popup/frequency-options/cron-content/cron-content.component';
import { DayInMonthSelectionContentComponent } from './_popups/config-create-popup/frequency-options/day-in-month-selection-content/day-in-month-selection-content.component';
import { DaySelectionContentComponent } from './_popups/config-create-popup/frequency-options/day-selection-content/day-selection-content.component';
import { ConfirmationPopupComponent } from './_popups/confirmation-popup/confirmation-popup.component';
import { ConfigSourceContentComponent } from './_popups/config-create-popup/config-source-content/config-source-content.component';
import { HttpClientModule } from '@angular/common/http'
import {JwtModule} from "@auth0/angular-jwt";

function tokenGetter() {
  console.log('xxx');
  return sessionStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    SettingsContentComponent,
    SettingsGeneralContentComponent,
    SettingsLogsContentComponent,
    SettingsUsersContentComponent,
    ReportsPopupComponent,
    ClientsPopupComponent,
    ConfigCreatePopupComponent,
    AddUserPopupComponent,
    ConfigDestinationContentComponent,
    CronContentComponent,
    DayInMonthSelectionContentComponent,
    DaySelectionContentComponent,
    ConfirmationPopupComponent,
    ConfigSourceContentComponent,
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
        MatDatepickerModule,
        MatRippleModule,
        ScrollingModule,
        FormsModule,
        HttpClientModule,
        JwtModule.forRoot({
              config: {
                tokenGetter: tokenGetter
              },
            }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
