import { LoginType } from './enums/login-type.enum';


export class Login{

    constructor(public username:string,public email:string,public password:string,public status:LoginType){}

}