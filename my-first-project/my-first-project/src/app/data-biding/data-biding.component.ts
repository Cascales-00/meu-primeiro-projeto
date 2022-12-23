import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Dener";
  public idade: number = 29;
  public maisUm: number = 1;

  public desativaBotao: boolean = true;
  public imgSrc: string = "https://img.elo7.com.br/product/zoom/3C31775/painel-redondo-one-piece-lona-festa-infantil.jpg"
  public position: {x: number, y: number} = {x: 0, y: 0};
  constructor() {}

  ngOnInit(): void {
    
  }

  public alertaInfo(valor: MouseEvent){
    console.log(valor); 
  }

  public mouseMoveTeste(valor: MouseEvent){
    
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
