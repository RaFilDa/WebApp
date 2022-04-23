import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";
import {Router} from "@angular/router";

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


  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.api + '/Users', this.options).pipe(
      catchError(err => {
        this.unauthenticated(err);
        throw new Error(err);
      })
    );
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(environment.api + '/Users' + id, this.options);
  }

  public save(user: User): Observable<User> {
    if (user.id) {
      return this.http.put<User>(environment.api + '/Users' + user.id, user, this.options);

    } else {
      return this.http.post<User>(environment.api + '/Users', user, this.options);
    }
  }

  private unauthenticated(err: any): void {
    if (err.status === 401) {
      this.sessions.logout();
      this.router.navigate([ '/login' ]);
    }
  }
}
