import { Injectable } from '@angular/core';

export interface menuProduct{
  image:string,
  title:string,
  description:string,
  price:number,
  availability:boolean,
  ingredients:string,
  details?:string
 }

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items:Array<menuProduct> = [];
  detail:menuProduct = {} as menuProduct;
  constructor() { }


  getItems(){
    return this.items;
  }

  getdetail(){
    console.log(this.detail)
    return this.detail;
  }



  setItems(item:menuProduct){
   this.items.push(item)
  }

  passDetails(item:menuProduct){
    console.log("passDetails")
    this.detail = item
    console.log(this.detail)
   }

}
