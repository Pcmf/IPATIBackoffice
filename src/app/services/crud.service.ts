import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: Http) {

  }
  /**
   * Metodo para obter todos os dados.
   * @param path
   */
  getAll (path: string) {
    return this.http.get('http://localhost/ipatimupRest/' + path);
    }
    /**
     *
     * @param path - inclue os parametros
     */
  getOne (path: string) {
    return this.http.get('http://localhost/ipatimupRest/' + path);
  }
  /**
   * Metodo para fazer updates
   * @param path
   * @param obj
   */
  saveChanges (path: string, obj: any) {
    console.log(path);
    this.http.put('http://localhost/ipatimupRest/' + path, JSON.stringify(obj)).subscribe(resp => console.log(resp._body));
  }

  create (path: string, obj: any) {
    this.http.post('http://localhost/ipatimupRest/' + path, JSON.stringify(obj)).subscribe(resp => console.log(resp));
  }

  delete (path: string) {
    this.http.delete('http://localhost/ipatimupRest/' + path ).subscribe( resp => console.log(resp));
  }

}
