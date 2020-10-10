import { Component, OnInit } from '@angular/core';
import { Personas } from '../interfaces/personas.interface';
import  {PersonasService} from '../services/personas.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  persona:any;
  id:number;

  constructor(private servicePersonas: PersonasService, private _route:ActivatedRoute){
    console.log(this._route.snapshot.paramMap.get('id'))
    this.id = +this._route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void{
    //this.personas= (PERSONAS as any).data;
    this.llamarServicio();
    
  }
  llamarServicio(){
    this.servicePersonas.obtenerPersonas().subscribe((personas:Personas[])=>{
      /* console.log(personas)
      this.personas = personas; */
      for(var i = 0; i < personas.length; i += 1){
         var result: any = personas[i];
        console.log(result.id)
        if(result.id === this.id ){
          return this.persona = result;
        }}
        
    });
  }
}