import { Postagem } from "./Postagem";

export class User {
  public id: number;
  public nome: string;
  public razaoSocial: string;
  public email: string;
  public senha: string;
  public descricaoPerfil: string;
  public dataNascimento: Date;
  public postagem: Postagem[];
  public foto: string;
}
