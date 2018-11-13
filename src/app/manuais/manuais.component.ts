import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { delay } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-manuais',
  templateUrl: './manuais.component.html',
  styleUrls: ['./manuais.component.css']
})
export class ManuaisComponent {
  private manuais: any[];
  private titulos: any[];
  private manual: string;
  private cod_manual: number;
  private descr: string;

  constructor(private crudService: CrudService) {
    this.getData();
   }

  getData () {
    this.crudService.getAll('man').subscribe( resp => {
      this.manuais = resp.json();
    });
  }

  showTitulos (m) {
    this.crudService.getAll('man/' + m.COD_MANUAL).subscribe( resp => {
        this.cod_manual = m.COD_MANUAL;
        this.manual = m.NOME;
        this.titulos = resp.json();
    });
  }

  loadDescricao ( obj ) {
    this.descr = '';
    if ( obj.SEQ) {
      this.crudService.getOne('man/' + obj.COD_MANUAL + '/' + obj.SEQ)
      .subscribe( resp => {
        this.descr = resp._body;
      });
    }
  }

  newManual () {
    this.newNomeManual = '';
    this.showNewManual = true;
  }

  guardarNovoManual (nome) {
    this.crudService.create('man', nome );
    this.cancelar();
    this.getData(), delay(1000);
  }

  deleteManual (m) {
    if  (confirm('Atenção!!\nVai remover este manual e todos os titulos associados!\nPretende continuar?')){
      this.crudService.delete('man/' + m.COD_MANUAL);
      this.manuais.splice(this.manuais.indexOf(m), 1);
    }
  }

  cancelar () {
    this.newNomeManual = '';
    this.showNewManual = false;
  }

  saveTitulo (f) {
    console.log(f);
    this.crudService.saveChanges('man/' + f.cod_manual + '/' + f.seq, f);
    this.showTitulos({'COD_MANUAL': f.cod_manual, 'NOME': this.manual});
  }

  newTitulo () {
    this.descr = '';
    this.titulos.push({'COD_MANUAL': this.cod_manual, 'SEQ': 0, 'NOME': 'Novo Titulo', 'DESCRICAO': '' });
  }

  deleteTitulo (t) {
    this.crudService.delete('man/' + t.COD_MANUAL + '/' + t.SEQ);
    this.titulos.splice(this.titulos.indexOf(t), 1);
  }
}
