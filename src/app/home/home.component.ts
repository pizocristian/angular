import { Component, OnInit } from '@angular/core';
import { Personas } from '../interfaces/personas.interface';
import  {PersonasService} from '../services/personas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personas:Personas[];

  constructor(private servicePersonas: PersonasService){
    this.llamarServicio();
  }
  ngOnInit(){
  
  }
  llamarServicio(){
    this.servicePersonas.obtenerPersonas().subscribe((personas:Personas[])=>{
      console.log(personas)
      this.personas = personas;
    });
  }
}
