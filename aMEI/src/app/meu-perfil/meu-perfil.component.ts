import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPost: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string

  user: User = new User()
  idUser = environment.id

  //Dados usuario do card
  nome = environment.nome
  foto = environment.foto
  descricaoPerfil = environment.descricaoPerfil



  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    public authService: AuthService,
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == '') {
      alert('Sua seção expirou, faça o login novamente!')
      this.router.navigate(['/entrar'])
  }
  this.getAllTemas()
  this.getAllPostagens()
  }

  getAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=> {
      this.listaTemas = resp
    })
  }
  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=> {
      this.tema = resp
    })
  }
  //Exibir publis
  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  //Postagem publi
  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=> {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

  //Pesquisa de publicações, ainda não implementado
  /*findByTituloPostagem(){
    if(this.tituloPost == ''){
      this.getAllPostagens()
    } else {
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  findByNomeTema(){
      if(this.nomeTema == ''){
        this.getAllTemas()
      } else {
        this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
          this.listaTemas = resp
        })
      }
    }*/

}