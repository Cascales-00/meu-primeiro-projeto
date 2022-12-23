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
  public imgSrc: string = "https://i.pinimg.com/originals/bd/a5/be/bda5be61177acdb5fd46c3219f8b81a0.jpg "
  constructor() {}

  ngOnInit(): void {
    
  }
}
