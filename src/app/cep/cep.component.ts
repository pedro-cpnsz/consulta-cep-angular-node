import { Component } from '@angular/core';
import { CepService } from './cep.service';

@Component({
  selector: 'app-cep',
  standalone: true,
  imports: [],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css'
})
export class CepComponent {

  constructor(private cepService: CepService) {

  }

  public buscaCep() {
    this.cepService.consultaCep().then(data => {
      let retorno: any = data;
      console.log(data);
      alert(retorno.localidade);
    });
  }
}
