import { Component, OnInit } from '@angular/core';

// Services
import { FoodListService } from 'src/app/services/food-list.service';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: any;
  constructor(private foodlistService: FoodListService){  }

  ngOnInit(): void {
    this.foodlistService.foodList().subscribe(
      res => this.foodList = res,
      error => error
    );

    this.foodlistService.emitEvent.subscribe(
      res => alert(`Olha você add =>${res}`)
    );
  }

}
