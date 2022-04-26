import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

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

  constructor(private http: HttpClient) { }

  getReports(): Observable<IReportDetail[]> {
    return this.http.get<IReportDetail[]>('https://localhost:5001/Reports')
  }

}
