import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppEnvValues } from '../../../../env/app.env';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any = null;

  constructor(private http: HttpClient) {}

  async checkUserInSever() {
    // this.http.get(`${AppEnvValues.Server_Url}/auth/currentUser`).subscribe({
    //   next => (users) {
    // res(this.user);
    //   },
    // })
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.user);
      }, 2000);
    });
  }
}
