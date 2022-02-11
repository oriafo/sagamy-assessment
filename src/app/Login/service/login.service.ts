import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Login, Logout } from 'src/app/login/domain/login.data';
import { environment } from '../../../environments/environment';
//import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  loggedIn:Boolean=false;
  sessionVariable={} as Logout

  constructor(private http: HttpClient) { }

  cleintLogint(data:Login): Observable<any>{
    return this.http.post<Login>(this.getBaseApiUrl()+'login', data);
  }

  cleintLogout(data:Logout): Observable<any>{
    return this.http.post<Logout>(this.getBaseApiUrl()+'logout', data);
  }
  getbranch():Observable<any>{
    return this.http.get<Login>(this.getBaseApiUrl()+'branch/list');
  }

  // addSuccess(title:string,message:string) {
  //   //console.log("message display now now")
  //   this.messageService.add({severity:'success', summary:title, detail:message});
  
  
  // }
  // addError(title:string,message:string) {
  //   this.messageService.add({severity:'error', summary:title, detail:message});
  // }

  protected getBaseApiUrl(): string {
  return environment.apiBaseUrl;
  }

}

    
  

