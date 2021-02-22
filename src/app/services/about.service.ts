import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }

  gitAllMenu(){
    return this.http.get('http://oms.mulino-ksa.com/api/index.php/ar/page/about');
  }
}
