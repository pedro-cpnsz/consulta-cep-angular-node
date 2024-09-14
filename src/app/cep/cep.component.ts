import { Component } from '@angular/core';
import { CepService } from './cep.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cep',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css'
})
export class CepComponent {

  constructor(private cepService: CepService) {

  }

  buscarCep(): void {
    const cep = (document.getElementById('cep') as HTMLInputElement).value;

    if (cep) {
      this.cepService.consultaCep(cep).subscribe(data => {
        if (data && !data.erro) {
          (document.getElementById('logradouro') as HTMLInputElement).value = data.logradouro;
          (document.getElementById('bairro') as HTMLInputElement).value = data.bairro;
          (document.getElementById('uf') as HTMLInputElement).value = data.uf;
          (document.getElementById('localidade') as HTMLInputElement).value = data.localidade;
          (document.getElementById('ibge') as HTMLInputElement).value = data.ibge;
          (document.getElementById('ddd') as HTMLInputElement).value = data.ddd;
        } else {
          // Tratar erro, por exemplo, mostrar uma mensagem de erro
        }
      });
    }
  }
}
