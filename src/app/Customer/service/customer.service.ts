import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { customerData } from 'src/app/Customer/domain/customer.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAccount():Observable<any>{
    return this.http.get<customerData>(this.getBaseApiUrl()+'account/list');
  }

  protected getBaseApiUrl(): string {
  return environment.apiBaseUrl;
  }

}

    
  

