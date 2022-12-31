import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit{

  @Output() public enviarDados = new EventEmitter();
  public list: Array<{nome: string, idade: number}> /* <--- ou troque por Any*/ = [
    {nome: "Marjorie Gaioso", idade: 89},
    {nome: "Patricia", idade: 34},
    {nome: "Matheuxxx", idade: 11},

  ]
  constructor() {}

  ngOnInit(): void {
    
  }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
    ;
  }
}
