import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Credentials from '../models/Credentials';
import RegisterUser from '../models/RegisterUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL = "http://localhost:7879/"

  constructor(private httpClient: HttpClient) { }


  public login(credential: Credentials) {
    return this.httpClient.post(this.API_URL+"auth/login", credential);
  }

  public register(registerUser: RegisterUser) {
    return this.httpClient.post(this.API_URL+"auth/register", registerUser);
  }
}
