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
    obj.token = sessionStorage.token;
    console.log(path);
    return this.http.put('http://localhost/ipatimupRest/' + path, JSON.stringify(obj));
  }

  create (path: string, obj: any) {
    obj.token = sessionStorage.token;
   // this.http.post('http://localhost/ipatimupRest/' + path, JSON.stringify(obj)).subscribe(resp => console.log(resp));
    return this.http.post('http://localhost/ipatimupRest/' + path, JSON.stringify(obj));
  }

  delete (path: string) {
    return this.http.delete('http://localhost/ipatimupRest/' + path );
  }

}
