import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private http: HttpClient;

  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler)
  }

  public consultaCep() {

    let url = 'https://viacep.com.br/ws/';

    return this.http.get(url + 85807860 + '/json').toPromise();
  }

}
