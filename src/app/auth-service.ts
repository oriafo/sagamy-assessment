import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AuthService implements HttpInterceptor {

  authVariable:string

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const sessionId = sessionStorage.getItem('SessionId'); 
    if (!sessionId) {
      return next.handle(request);
    }
    //this.authVariable = JSON.stringify(sessionId)
    const _request = request.clone({
      headers: request.headers.set('Authorization', `Sagamy:${sessionId}`),

    });

    return next.handle(_request);
  }

}
