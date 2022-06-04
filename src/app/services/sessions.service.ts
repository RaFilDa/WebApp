import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

export interface ISession {
  id: number
  name: string
  token: string
}

export interface ISessionInfo {
  session: ISession
  expired: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  public token: string|null = null;

  constructor(private http: HttpClient,
              private jwt: JwtHelperService) {
    this.token = this.loadToken();
  }

  public get options(): { headers: HttpHeaders }  {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    };
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

  public GetSessions(): Observable<ISessionInfo[]> {
    return this.http.get<ISessionInfo[]>(environment.api + '/api/Sessions', this.options)
  }

  public AddSession(name: string, days: number, unlimited: boolean): Observable<ISession> {
    return this.http.post<ISession>(environment.api + '/api/Sessions/add?name=' + name + '&days=' + String(days) + '&unlimited=' + String(unlimited), null, this.options)
  }

  public BanSession(token: string): Observable<ISession> {
    return this.http.delete<ISession>(environment.api + '/api/Sessions?token=' + token, this.options)
  }
}
