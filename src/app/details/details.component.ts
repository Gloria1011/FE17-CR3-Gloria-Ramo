import { Component, OnInit } from '@angular/core';
import { CartService, menuProduct } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detail:menuProduct= {} as menuProduct;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.detail = this.cartService.getdetail()
  }

}
