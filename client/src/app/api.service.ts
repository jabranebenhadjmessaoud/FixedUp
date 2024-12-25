import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseurl="http://localhost:9999/api"
  constructor(private http:HttpClient) {}
  login(data:User):Observable <any>{
    return this.http.post(this.baseurl+"/login",data).pipe(
      catchError(this.handleError)
    )
  }
  clientRegister(data:User):Observable <any>{
    return this.http.post(this.baseurl+"/client/register",data).pipe(
      catchError(this.handleError2)
    )
  }

  WorkerRegister(data:User):Observable <any>{
    return this.http.post(this.baseurl+"/worker/register",data).pipe(
      catchError(this.handleError2)
    )
  }

  private handleError(err: any): Observable<any> {
    console.error('an error occurred!', err.error.msg)
    return throwError(()=>err.error)
  }
  private handleError2(err: any): Observable<any> {
    console.error('an error occurred!', err)
    return throwError(()=>err.error.errors)
  }

}
