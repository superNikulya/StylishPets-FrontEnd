import {BehaviorSubject, Observable, tap} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import jwtDecode from  "jwt-decode"
import {User} from "./interfaces";

@Injectable({
  providedIn:'root'
})

export class AuthService {
  private token: string | null = null;
  role?: string = ''
  decoded: any = {}
  state: {email: string, role: string} | null = null;
  isAdmin = new BehaviorSubject(false);

  constructor(
    private http: HttpClient
  ) { }

  register(user: User): Observable<{user: User}>{
    return this.http.post<{user:User}>( '/api/auth/register',user)
  }
  login(user: User): Observable<{token: string}>{
    return this.http.post<{token: string}>( '/api/auth/login',user)
      .pipe(
        tap(
          ({token})=>{
            localStorage.setItem('auth-token', token)
            this.setToken(token)
            this.componentDidMount();
        }))
  }

    componentDidMount() {
    const token = localStorage.getItem('auth-token');
    if (token) {
      this.decoded = jwtDecode(token);
      this.state = {
        email: this.decoded.email,
        role: this.decoded.role,
      }
    }
  }

  checkRole(): boolean{
    this.componentDidMount();
    if(this.state?.role == 'admin'){
      return!!this.token
    }
    else{
      return false
    }
  }

  setToken(token:string|null){
    this.token = token
  }

  getToken():any{
    if (this.token === null){
      console.log('no access')
    } else {
      return this.token
    }
  }

  logout() {
    this.setToken(null)
    localStorage.clear()
  }
}
