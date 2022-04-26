import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionsService} from "./sessions.service";
import {environment} from "../../environments/environment";

export interface IReportDetail {
  id: number
  date: string
  name: string
  mac: string
  backup: string
  state: boolean
  message: string
}

@Injectable({
  providedIn: 'root'
})

export class ReportsServiceService {

  constructor(private http: HttpClient, private sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders }  {
      return {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.sessions.token
        })
      };
    }

  getReports(): Observable<IReportDetail[]> {
    return this.http.get<IReportDetail[]>(environment.api + '/Reports', this.options);
  }

}
