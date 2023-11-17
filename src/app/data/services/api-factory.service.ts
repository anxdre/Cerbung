import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiFactoryService {
  private BASE_URL = 'https://hybrid.anxdre.my.id/'

  constructor(private http:HttpClient) {
  }

  getRequest(url: String, params: HttpParams = new HttpParams()): Observable<any> {
    console.log(this.BASE_URL + url)
    return this.http.get(this.BASE_URL + url,{params:params})
  }

  postRequest(url: String,body:Map<String,any>): Observable<any> {
    const convMap = new URLSearchParams();
    body.forEach((val: any, key: any) => {
      convMap.set(key,val)
    });
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post(this.BASE_URL + url,convMap.toString(),{headers:headers})
  }
}
