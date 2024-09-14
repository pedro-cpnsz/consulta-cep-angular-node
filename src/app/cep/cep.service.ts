import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private http: HttpClient;

  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler)
  }

  public consultaCep(cep: string): Observable<any> {

    let url = 'https://viacep.com.br/ws/';

    return this.http.get<any>(`${url}/${cep}/json/`);
  }

}
