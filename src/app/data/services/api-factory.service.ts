import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiFactoryService {
  private BASE_URL = 'hybrid.anxdre.my.id'
  constructor(private http:HttpClient) {

  }
}
