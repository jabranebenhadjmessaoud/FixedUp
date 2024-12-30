import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './user';
import { Post } from './post';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseurl="http://localhost:9999/api"
  
  constructor(private http:HttpClient) {}
  login(data:User):Observable <any>{
    return this.http.post(this.baseurl+"/client/login",data).pipe(
      catchError(this.handleError)
    )
  }

  workerLogin(data:User):Observable <any>{
    return this.http.post(this.baseurl+"/worker/login",data).pipe(
      catchError(this.handleError)
    )
  }

  clientRegister(data:User):Observable <any>{
    return this.http.post(this.baseurl+"/client/register",data).pipe(
      catchError(this.handleError2)
    )
  }

  createPost(data:Post):Observable<any>{
    return this.http.post(this.baseurl+"/createjobpost",data).pipe(
      catchError(this.handleError2)
    )
  }

  addRate(data:object):Observable<any>{
    return this.http.post(this.baseurl+"/addrate",data).pipe(
      catchError(this.handleError2)
    )
  }

  getAllRates():Observable<any>{
    return this.http.get(this.baseurl+"/allrates")
  }

  WorkerRegister(data:User):Observable <any>{
    return this.http.post(this.baseurl+"/worker/register",data).pipe(
      catchError(this.handleError2)
    )
  }

  getJobByWorker(id:string):Observable <any>{
    return this.http.get(this.baseurl+"/jobpost/"+id)
  }

  getAppointmentByWorker(id:string):Observable <any>{
    return this.http.get(this.baseurl+"/apointment/"+id)
  }

  getRateByWorker(id:string):Observable <any>{
    return this.http.get(this.baseurl+"/allrates/"+id)
  }

  uploadImage(sticker: File): Observable<any> {
    console.log(sticker);
    const data = new FormData();
    data.append('sticker', sticker, sticker.name);
    return this.http.post<any>(this.baseurl+"/upload", data);
  }

  private handleError(err: any): Observable<any> {
    console.error('an error occurred!', err.error.msg)
    return throwError(()=>err.error)
  }

  private handleError2(err: any): Observable<any> {
    console.error('an error occurred!', err)
    return throwError(()=>err.error.errors)
  } 

  getallworkers():Observable<any>{
    return this.http.get(this.baseurl+"/allworker")
  }
  getalljobs():Observable<any>{
    return this.http.get(this.baseurl+"/alljobposts")
  }

  getoneworker(worker_id:string):Observable<any>{
    return this.http.get(this.baseurl+"/worker/"+worker_id)
  }
  
  deleteworker(worker_id:string):Observable<any>{
    return this.http.delete(this.baseurl+"/worker/"+worker_id)
  }
  getallclients():Observable<any>{
    return this.http.get(this.baseurl+"/allclient")
  }
  getOneClient(client_id:string):Observable<any>{
    return this.http.get(this.baseurl+"/client/"+client_id)
  }
  deleteclient(client_id:string):Observable<any>{
    return this.http.delete(this.baseurl+"/client/"+client_id)
  }

  UpdateClient(data:User):Observable<any>{
    return this.http.put(this.baseurl+"/client/"+data._id,data).pipe(
      catchError(this.handleError2)
    )
  }
  UpdateWorker(data:User):Observable<any>{
    return this.http.put(this.baseurl+"/worker/"+data._id,data).pipe(
      catchError(this.handleError2)
    )
  }

  createAppointment(data:Appointment):Observable<any>{
    return this.http.post(this.baseurl+"/createapointment",data).pipe(
      catchError(this.handleError2)
    )
  }

  logoutClient(): Observable<any> {
    return this.http.get(this.baseurl+"/client/logout").pipe(
      catchError((err) => {
        console.error('Error during logout:', err);
        return throwError(() => err);
      })
    );
  }

  logoutWorker(): Observable<any> {
    return this.http.get(this.baseurl+"/worker/logout").pipe(
      catchError((err) => {
        console.error('Error during logout:', err);
        return throwError(() => err);
      })
    );
  }
}
