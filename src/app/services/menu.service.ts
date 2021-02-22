import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  gitAllMenu(){
    return this.http.get('http://oms.mulino-ksa.com/json.php');
  }
}
