import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn:'root'})
export class AuthService{
  constructor(private http:HttpClient) {
  }
  API_SERVER = "http://localhost:3000";

  signup(email:string,password:string){
    return this.http.post(`${this.API_SERVER}/signup`,
      {
        username:email,
        password:password
      }

    )
  }
  signIn(email:string,password:string){
    return this.http.post(`${this.API_SERVER}/login`,
      {
        username:email,
        password:password
      }

    )
  }
}
