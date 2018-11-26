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
    if  (servico.cod_servico === 0) {
      this.crudService.create('servicos', servico).subscribe( resp => {
        this.getData();
      });
    } else {
      this.crudService.saveChanges('servicos/' + servico.cod_servico, servico).subscribe( resp => {
        this.getData();
      });
    }
  }

  deleteServico (servicoId) {
    this.crudService.delete('servicos/' + servicoId).subscribe( resp => {
      this.getData();
    });
  }

  newServico () {
    this.servicos.push({'COD_SERVICO': 0, 'NOME': 'novo servico', 'VIDEO': '', 'PDF': '' });
  }

  getData () {
      this.crudService.getAll('servicos').subscribe(
        resp => {
          this.servicos = resp.json();
        }
      );
  }
}
