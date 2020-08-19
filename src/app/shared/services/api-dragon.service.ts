import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, forkJoin } from "rxjs";

import { environment } from 'src/environments/environment';
import { IDragon } from '../interfaces/Idragon';

@Injectable({
  providedIn: 'root'
})
export class ApiDragonService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Get Dragons List
   */
  getDragonList(): Observable<IDragon[]> {
    return this.http.get<IDragon[]>(environment.api_url);
  }

  /**
   * Get Dragon infos
   * @param id - Dragon ID
   */
  getDragonId(id: number): Observable<IDragon> {
    return this.http.get<IDragon>(environment.api_url+'/'+id);
  }

  /**
   * Create a dragon
   * @param dragon Dragon infos
   */
  addDragon(dragon: IDragon) {
    const url = environment.api_url;
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    // const body = 'name='+dragon.name +
    //               '&type='+dragon.type +
    //               '&createdAt'+dragon.createdAt;

    return this.http.post(url, JSON.stringify(dragon), {headers: header});
  }

  /**
   * Edit tha dragon infos
   * @param dragon Dragon infos
   */
  editDragon(dragon: IDragon) {
    const url = environment.api_url + '/' +dragon.id;
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    // const body = 'name='+dragon.name +
    //               '&type='+dragon.type +
    //               '&createdAt'+dragon.createdAt +
    //               '&id='+dragon.id;

    return this.http.put(url, JSON.stringify(dragon), {headers: header});
  }

  /**
   * Delete a dragon
   * @param id Dragon ID
   */
  deleteDragon(id: number): Observable<IDragon> {
    const url = environment.api_url+'/'+id;
    return this.http.delete<IDragon>(url);
  }
}
