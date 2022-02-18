import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientsContentComponent } from './clients-content/clients-content.component';
import {ConfigsContentComponent} from "./configs-content/configs-content.component";
import {ReportsContentComponent} from "./reports-content/reports-content.component";

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
export class AppRoutingModule { }
export const RoutingComponents = [MyDashboardComponent, LoginscreenComponent, ClientsContentComponent, PageNotFoundComponent]
