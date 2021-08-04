import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  tema: Theme = new Theme()
  listaTema: Theme[]

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert("Sua sessão expirou, faça o login novamente")
      this.router.navigate(['/login'])
    }

    this.findAllThemes()
  }

  cadastrar() {
    this.themeService.postTheme(this.tema).subscribe((resp: Theme) => {
      this.tema = resp
      alert("Tema cadastrado com sucesso!")
      this.findAllThemes()
      this.tema = new Theme()
    })
  }

  findAllThemes() {
    this.themeService.getAllTheme().subscribe((resp: Theme[]) => {
      this.listaTema = resp
    })
  }

}