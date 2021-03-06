import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchAuthService {

  constructor(private http:HttpClient) { }

  post(url:string,payload):Observable<any>{
    return this.http.post(`${environment.ROOT_URL}/${url}`,payload);
  }
  
  get(url:string):Observable<any>{
    return this.http.get(`${environment.ROOT_URL}/${url}`);
  }
  
  put(id:string,url:string,payload:any):Observable<any>{
    return this.http.put(`${environment.ROOT_URL}/${url}/${id}`,payload);
  }
  
  delete(url:string,id:string){
    return this.http.delete(`${environment.ROOT_URL}/${url}/${id}`);
  }
  
}
