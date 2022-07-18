 export interface UserInformation{
    user:string,
    password:string,
    name:string,
    surname:string,
    gendar:string,
    dateOfBirthUse:boolean,
    dateOfBirth:Date,
    email:string,
    success:boolean
}
export class UserInformation {
    constructor(person?: UserInformation) {
      return {
        user:person? person.user:'',
        password:person? person.password:'',
        name:person? person.name:'',
        surname:person? person.surname:'',
        gendar:person? person.gendar:'',
        dateOfBirthUse:person? person.success:false,
        dateOfBirth:person? person.dateOfBirth:new Date(0,0,0),
        email:person? person.email:'',
        success:person? person.success:false
      }
    }
  }

  
  