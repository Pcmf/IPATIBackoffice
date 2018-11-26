import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css']
})
export class UtilComponent {
  private tputils: any[];
  constructor(private crudService: CrudService) {
    this.getData();
  }

  getData() {
    this.crudService.getAll('tputil').subscribe( resp => this.tputils = resp.json());
  }


  newTPC ( obj ) {
    this.tputils.push({'COD_TIPO_UTIL': 0, 'NOME': '"novo tipo"'});
  }

  saveTPC ( obj ) {
    console.log(obj );
    if (obj.cod_tipo_util !== 0) {
      this.crudService.saveChanges('tputil/' + obj.cod_tipo_util, obj).subscribe( resp => {
        this.getData();
      });
    } else {
      this.crudService.create('tputil', obj).subscribe( resp => {
        this.getData();
      });
    }
  }

  deleteTPC ( cod_tipo_util) {
    this.crudService.delete('tputil/' + cod_tipo_util).subscribe( resp => {
      this.getData();
    });
  }

}
