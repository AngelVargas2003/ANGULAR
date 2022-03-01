import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje="Hola"
  constructor(private httpClient:HttpClient){}
  mandarmsj(){
    var url="http://127.0.0.1:3333/"
    console.log("Le dire"+" "+this.mensaje+ " "+"al servidor 1")
    this.httpClient.get(url+"respuesta/"+this.mensaje).subscribe((msj:any)=>{
      console.log("El servidor 1 me contesto:"+msj.mensaje)
    })
  }

}
