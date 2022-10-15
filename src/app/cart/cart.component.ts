import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService, menuProduct } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderForm!: FormGroup;
  orderedProducts:Array<menuProduct> = []
  totalPrice:number = 0;
  service:number = 3.20;
  discount:number = 10;

  constructor(private cartService:CartService) {
  }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'test': new FormControl(null)
    })

    this.orderedProducts = this.cartService.getItems();
    this.sumOfOrderedProducts();
    this.increaseDiscount();
  }

  increaseDiscount():void{
    if(this.totalPrice >40){
      this.discount = 20;
    }
  }

  sumOfOrderedProducts():void{
    this.orderedProducts.forEach((product:menuProduct)=>{
      this.totalPrice += product.price
    })
  }

  totalPriceCalc():number{
    return (this.totalPrice+this.service) *   (1 - this.discount/100)
  }

  onSubmit() {
    console.log(this.orderForm.value);
  }
}
