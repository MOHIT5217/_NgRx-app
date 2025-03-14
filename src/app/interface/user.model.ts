export class User {
    constructor(
        private email:string,
        private token: string,
        private localId: string,
        private expirationDate: Date
    ){}

    get getExpiration(){
        return this.expirationDate;
    }

    get authToken(){
        return this.token;
    }
}