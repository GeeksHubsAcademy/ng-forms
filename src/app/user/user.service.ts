import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }
  login(credentials: { username: string, password: string }): Promise<User | undefined> {
    return this.httpClient.get<User[]>(this.API_URL + 'users').toPromise().then(users => {
      return users.find(user => user.username === credentials.username && user.password === credentials.password);
    });
  }
}
