import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface IClient {
  id: number
  name: string
  ip: string
  mac: string
  lastseen: string
}

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  constructor(private http:HttpClient) { }

  getClients(): Observable<IClient[]> {
    return this.http.get<IClient[]>('https://localhost:5001/Computers');
  }

  getClient(id: number): Observable<IClient> {
    return this.http.get<IClient>('https://localhost:5001/Computers/' + id);
  }

  remove(id: number): void {
    this.http.delete('https://localhost:5001/Computers/' + id)
      .subscribe(x => console.log(x));
  }
}
