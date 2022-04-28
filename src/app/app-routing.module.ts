import {EventEmitter, Input, NgModule, Output} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientsContentComponent } from './_content/clients-content/clients-content.component';
import { ConfigsContentComponent } from "./_content/configs-content/configs-content.component";
import { ReportsContentComponent } from "./_content/reports-content/reports-content.component";
import { GroupsContentComponent } from "./_content/groups-content/groups-content.component";
import { SettingsContentComponent } from "./_content/settings-content/settings-content.component";
import { SettingsGeneralContentComponent } from "./_content/settings-content/settings-general-content/settings-general-content.component";
import { SettingsLogsContentComponent } from "./_content/settings-content/settings-logs-content/settings-logs-content.component";
import { SettingsUsersContentComponent } from "./_content/settings-content/settings-users-content/settings-users-content.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {
    path: 'dashboard',
    component: MyDashboardComponent,
      children: [
      {path: '', redirectTo: '/dashboard/clients', pathMatch:'full'},
      {path: 'clients', component: ClientsContentComponent},
      {path: 'configs', component: ConfigsContentComponent},
      {path: 'reports', component: ReportsContentComponent},
      {path: 'groups', component: GroupsContentComponent},
      {path: 'settings', component: SettingsContentComponent,
        children: [
        {path: 'general', component: SettingsGeneralContentComponent},
        {path: 'logs', component: SettingsLogsContentComponent},
        {path: 'users', component: SettingsUsersContentComponent},
        ]
      }
      ],
  },
  {path: 'login', component: LoginscreenComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [
  MyDashboardComponent,
  LoginscreenComponent,
  ClientsContentComponent,
  PageNotFoundComponent,
  ReportsContentComponent,
  GroupsContentComponent,
  SettingsContentComponent,
  ConfigsContentComponent,
]
