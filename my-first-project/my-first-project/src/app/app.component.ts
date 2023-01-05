import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- 
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir componente</button>
  -->
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

  <!--
  <app-diretivas-atributos>
    <h1> Aulas de Diretivas de Atributos </h1>
    <h3>Final da aula com xuxu</h3>
  </app-diretivas-atributos>

  <app-diretivas-atributos>
    <h1> Patricia Moraes </h1>
    <h3>Elisangela Silva</h3>
  </app-diretivas-atributos>
  -->
  <!--
  <app-diretivas-atributos></app-diretivas-atributos>
  <app-new-component></app-new-component>
  -->

<!-- @input
  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">Add</button>
-->

<!--
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
-->
<!--
  <app-food-add></app-food-add>
  <app-food-list></app-food-list>
 --> 
  <app-forms></app-forms>
  <router-outlet></router-outlet>  
  `,
  
})
export class AppComponent implements OnInit{

  public destruir: boolean = true;

  public addValue: number = 0;

  public getDados: {nome: string, idade: number} | undefined;

  constructor() {  }
  
  ngOnInit(): void {  }

  public add() {
    this.addValue += 1;
  }

  public setDados(event: any){
    this.getDados = event;
  }
  
}
