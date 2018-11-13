import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  private sobres: any[];

  constructor(private crudService: CrudService) {
    this.getData();
  }

  saveChange ( obj ) {
    console.log(obj);
    this.crudService.saveChanges('sobre/' + obj.cod_sobre, obj);
    this.getData(), delay(1000);
  }


  getData () {
    this.crudService.getAll('sobre').subscribe(
      resp => { this.sobres = resp.json(); }
    );
  }

}
