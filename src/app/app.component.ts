import {Component, HostBinding, OnInit} from '@angular/core';
import {SessionsService} from "./services/sessions.service";
import {Router} from "@angular/router";
import {filter, interval, tap} from "rxjs";
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "RaFilDa"

constructor(private router: Router,
            private sessions: SessionsService,
            private overlay: OverlayContainer) {
  }

  ngOnInit(): void {
      interval(1).pipe(
        filter(() => !this.sessions.authenticated),
        tap(() => this.sessions.logout())
      ).subscribe(() => this.router.navigate([ '/login' ]));
    }

public get authenticated(): boolean {
    return this.sessions.authenticated;
  }

  getMode(): string {
    let darkMode = this.sessions.loadMode() ? 'darkMode' : ''
    if (darkMode) {
      this.overlay.getContainerElement().classList.add('darkMode');
    } else {
      this.overlay.getContainerElement().classList.remove('darkMode');
    }
    return darkMode
  }

  public logout(): void {
    this.sessions.logout();
    this.router.navigate([ '/login' ]);
  }

}
