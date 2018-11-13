import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {

  private consultas: any[];


  constructor(private crudService: CrudService) {
      this.getData();
   }


  getData() {
    this.crudService.getAll('tpconsulta').subscribe( resp => this.consultas = resp.json());
  }

  newTPC ( obj ) {
    this.consultas.push({'COD_TPCONSULTA': 0, 'NOME': '"novo tipo"'});
  }

  saveTPC ( obj ) {
    console.log(obj );
    if (obj.cod_tpconsulta !== 0) {
      this.crudService.saveChanges('tpconsulta/' + obj.cod_tpconsulta, obj);
    } else {
      this.crudService.create('tpconsulta', obj);
    }
    this.getData(), delay(500);
  }

  deleteTPC ( cod_tpconsulta) {
    this.crudService.delete('tpconsulta/' + cod_tpconsulta);
    this.getData(), delay(500);
  }



}
