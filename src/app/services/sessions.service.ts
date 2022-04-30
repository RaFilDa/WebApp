import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  public token: string|null = null;

  constructor(private http: HttpClient,
              private jwt: JwtHelperService) {
    this.token = this.loadToken();
  }


  public login(credentials: any): Observable<boolean> {
    return this.http.post<string>(environment.api + '/api/Sessions', credentials).pipe(
      tap(token => this.token = token),
      tap(token => this.saveToken(token)),
      map(token => true)
    );
  }

  public logout(): void {
    this.token = null;
    sessionStorage.removeItem('token');
  }

  public get authenticated(): boolean {
    return !!this.token && !this.jwt.isTokenExpired(this.token);
  }

  private saveToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  private loadToken(): string|null {
    return sessionStorage.getItem('token');
  }

  public loadMode(): boolean {
    let tmp = localStorage.getItem('darkmode')
    return tmp == null || tmp == 'true'
  }

  public saveMode(mode: boolean): void {
    localStorage.setItem('darkmode', String(mode))
  }
}
