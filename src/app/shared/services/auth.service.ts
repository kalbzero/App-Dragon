import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { ILogin } from '../interfaces/ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Session infos
   */
  private loginSubject: BehaviorSubject<ILogin>;
  
  /**
   * Current user in the session
   */
  public currentUser: Observable<ILogin>;

  /**
   * Test
   */
  localUser: ILogin = { username: 'dragao', password: '12345'};

  constructor(private http: HttpClient) { 
    /**
     * Verify the session and get the login infos
     */
    this.loginSubject = new BehaviorSubject<ILogin>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.loginSubject.asObservable();
  }

  /**
   * Get the user session infos
   */
  public getCurrentUserValues(): ILogin {
    return this.loginSubject.value;
  }

  /**
   * Set the user session infos
   * @param user - user session infos
   */
  public setCurrentUserValues(user: ILogin) {
    this.loginSubject.next(user);
  }

  /**
   * Verify the infos and return true or false
   * @param login - User infos in Login page
   */
  login(login: ILogin): boolean {
    if(login.username === this.localUser.username && login.password === this.localUser.password) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Remove the session infos
   */
  logout() {
    sessionStorage.removeItem('currentUser');
  }
}
