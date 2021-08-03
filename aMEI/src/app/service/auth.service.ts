import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // registrar(user: User) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable <UserLogin>{
    return this.http.post<UserLogin>('https://ameibackend.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable <User>{
    return this.http.post<User>('https://ameibackend.herokuapp.com/usuarios/cadastrar', user)
  }



}
