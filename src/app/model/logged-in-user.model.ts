import { UserRole } from './user-role';



/**
 * 
 */
export class LoggedInUser {

    constructor(public email: string, public username: string, public password: string, public firstName: string,
                public lastName: string, public gender: string, public phoneNumber: string, public roles: UserRole[]

    ) { }
}