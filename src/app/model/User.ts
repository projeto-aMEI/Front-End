import { Post } from './Post'

export class User {
    public id: number
    public nome: string
    public dataNascimento: number
    public usuario: string
    public senha: string
    public foto: string
    public tipo: string
    public postagem: Post[]
}