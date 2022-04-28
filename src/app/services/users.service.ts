import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";
import {Router} from "@angular/router";

export interface User {
  id: number,
  username: string,
  password: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,
              private router: Router,
              private sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders }  {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.sessions.token
      })
    };
  }


  public GetAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.api + '/Users', this.options).pipe(
      catchError(err => {
        this.unauthenticated(err);
        throw new Error(err);
      })
    );
  }

  public DeleteUser(id: number): Observable<User> {
    return this.http.delete<User>(environment.api + '/Users/' + id, this.options)
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(environment.api + '/Users/' + id, this.options);
  }

  public save(user: User): Observable<User> {
    return this.http.post<User>(environment.api + '/Users', user, this.options);
  }

  private unauthenticated(err: any): void {
    if (err.status === 401) {
      this.sessions.logout();
      this.router.navigate([ '/login' ]);
    }
  }
}
