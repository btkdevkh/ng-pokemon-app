import { Injectable } from '@angular/core';
import { delay, Observable, of, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false
  redirectUrl: string

  constructor() { }

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = (name === 'jimko91' && password === 'Jimko91') 
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    )
  }

  logout() {
    this.isLoggedIn = false
  }
}
