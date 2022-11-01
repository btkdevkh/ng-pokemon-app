import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string = "Déconnecté"
  name: string
  password: string

  constructor(
    protected authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  setMessage() {
    if(!this.authService.isLoggedIn) {
      this.message = "Nom et mot de passe sont incorrect"
      return
    }

    this.message = "Connecté"
  }

  login() {
    this.authService.login(this.name, this.password)
      .subscribe(isLoggedIn => {
        this.setMessage()

        if(!isLoggedIn) {
          this.password = ''
          this.router.navigate(['/login'])
          return
        }

        this.router.navigate(['/pokemons'])
      })
  }

  logout() {
    this.authService.logout()
    this.setMessage()
  }

}
