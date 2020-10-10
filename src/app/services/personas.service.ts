import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }
  obtenerPersonas(){
    return this.http.get('http://localhost/MOCK_DATA.json');
  }
  obtenerPersonasId(){
    return this.http.get('http://localhost/MOCK_DATA.json');
  }
}
