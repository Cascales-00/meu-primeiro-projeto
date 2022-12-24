import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {
  public condition: boolean = true;
  public conditionClick: boolean =true;
  public list: Array<{nome: string, idade: number}> = [
    {nome: "Marjorie Gaioso", idade:23},
    {nome: "Patricia", idade: 34},
    {nome: "Elisangela", idade: 44} 
  ];

  public nome: string = 'Marjo';
  constructor() {}

  ngOnInit(): void{

    setInterval(()=>{
      if (this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      } 
    }, 2000)
  }

  public onClick(){
    if (this.conditionClick){
      this.conditionClick = false;
    }else{
      this.conditionClick = true;
    } 
  }

  public onClickAddList(){
    this.list.push({nome: "Nay", idade: 31});
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1)
  }
}
