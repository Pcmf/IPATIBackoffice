import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {
  private lab = {};
  constructor(private crudService: CrudService) {
    this.crudService.getAll('lab').subscribe(
      resp => { this.lab = resp.json(); }
           // console.log(this.lab);
    );
   }

   /**
    * Guardar alterações
    */
   saveChanges (lab) {
     console.log(lab);
      this.crudService.saveChanges('lab', lab.value);
   }
}
