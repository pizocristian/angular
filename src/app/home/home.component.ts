import { Component, OnInit } from '@angular/core';
import { Personas } from '../interfaces/personas.interface';
import  {PersonasService} from '../services/personas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personas: any;
  nombreUsuario:any = null;
  persona:any;
  ocultar:boolean;
  mostrar:boolean;
  constructor(private servicePersonas: PersonasService){

    this.servicePersonas.obtenerPersonas().subscribe((personas:Personas[])=>{
 
      for(var i = 0; i < personas.length; i += 1){
         var result: any = personas[i];
        if(result.first_name === "Gretal" ){
          console.log(result);
          this.mostrar=true;
          return this.persona =result;
        
        }}
        
    });
  }
  ngOnInit(){
    this.llamarServicio();
  }
  llamarServicio(){
    this.servicePersonas.obtenerPersonas().subscribe((personas:Personas[])=>{
      console.log(personas)
      this.personas = personas;
    });
  }
  public buscar(){
    
    this.servicePersonas.obtenerPersonas().subscribe((personas:Personas[])=>{
      /* console.log(personas)
      this.personas = personas; */
      if(this.nombreUsuario ==''){
        this.mostrar=true;
      }else{
      for(var i = 0; i < personas.length; i += 1){
         var result: any = personas[i];
        if(result.first_name === this.nombreUsuario ){
          console.log(result);
          this.mostrar=false;
          this.nombreUsuario ="";
          return this.persona =result;
        
        }}
      }
    });

  // this.nombreUsuario ="";
  }
}
