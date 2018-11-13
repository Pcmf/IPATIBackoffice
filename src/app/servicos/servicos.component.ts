import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { interval } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  private servicos: any[];
  private expanded = false;
  constructor(private crudService: CrudService) {
      this.getData();
  }

  saveServico (servico) {
    console.log(servico);
    if  (servico.cod_servico === 0) {
      this.crudService.create('servicos', servico);
    } else {
      this.crudService.saveChanges('servicos/' + servico.cod_servico, servico);
    }
    this.getData();
  }

  deleteServico (servicoId) {
    this.crudService.delete('servicos/' + servicoId);
    this.getData();
  }

  newServico () {
    this.servicos.push({'COD_SERVICO': 0, 'NOME': 'novo servico', 'VIDEO': '', 'PDF': '' });
  }

  getData () {
      this.crudService.getAll('servicos').subscribe(
        resp => {
          this.servicos = resp.json();
        }
      ), delay(1000);
  }
}
