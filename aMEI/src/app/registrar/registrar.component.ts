import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  user: User = new User

  confirmarSenha: string;

  tipoUsuario: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)

  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value

  }

  // tipoUser(event: any){

  //   this.tipoUsuario= event.target.value

  // }

  cadastrar(){
    // this.user.tipo= this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      alert("As Senhas estão incorretas")
    }
    else{
      this.authService.cadastrar(this.user).subscribe((resp: User)=>{
        this.user= resp
        this.router.navigate(['/entrar'])
        alert("Usuário Cadastrado com Sucesso")
      })
    }
  }
}