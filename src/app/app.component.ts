import {Component, OnInit} from '@angular/core';
import {SessionsService} from "./services/sessions.service";
import {Router} from "@angular/router";
import {filter, interval, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "RaFilDa"


constructor(private router: Router,
            private sessions: SessionsService) {
  }

  ngOnInit(): void {
      interval(3600000).pipe(
        filter(() => !this.sessions.authenticated),
        tap(() => this.sessions.logout())
      ).subscribe(() => this.router.navigate([ '/login' ]));
    }

public get authenticated(): boolean {
    return this.sessions.authenticated;
  }

  public logout(): void {
    this.sessions.logout();
    this.router.navigate([ '/login' ]);
  }

}
