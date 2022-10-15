import { Component, OnInit } from '@angular/core';
import { CartService, menuProduct } from '../cart.service';
 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pageTitle:string = "Our Specialities"
  resturantMenuList:Array<menuProduct>=[
      {
        image:".././../../assets/images/1.png",
        title:"Pizza in forno",
        description:"Vegetarian pizza",
        price:20,
        availability:false,
        details:"It contains allergens like ; egg and products of Milk or lactose and products",
        ingredients:"tomato sauce, pomodorini, parmesan"
      }, {
        image:".././../../assets/images/6.png",
        title:"Pizza capriciosa",
        description:"Crispy crust with fresh basil",
        price:16,
        availability:true,
        details:"It contains allergens like ; egg and products of Milk or lactose and products",
        ingredients:"tomato sauce, basil, olives, parmesan"

      }, {
        image:".././../../assets/images/2.png",
        title:"Pizza Margherita",
        description:"Homemade mozarella",
        price:15,
        availability:true,
        details:"It contains allergens like ; egg and products of Milk or lactose and products",
        ingredients:"tomato sauce, parmesan cheese"

      },  {
        image:".././../../assets/images/8.png",
        title:"Pizza prosciutto",
        description:"Pizza with fresh pancetta",
        price:13,
        details:"It contains allergens like Cereals and products containing gluten",
        availability:true,
        ingredients:"pancetta, onions, garlic"

      }, {
        image:".././../../assets/images/5.png",
        title:"Pene gorgonzola",
        description:"Whole goat milk with aldente penne",
        price:18,
        availability:false,
        ingredients:"spinach, gorgonzola cheese"

      },  {
        image:".././../../assets/images/3.png",
        title:"Pizza with rucola",
        description:"Handmade pizza with fresh rucola",
        price:14,
        details:"It contains allergens like Cereals and products containing gluten",
        availability:true,
        ingredients:"rucola,panceta,basil"

      },  {
        image:".././../../assets/images/cheescake.jpg",
        title:"Cheescake",
        description:"Wild raspberries with honey milk",
        price:15,
        details:"It contains allergens like Cereals and products containing gluten",
        availability:true,
        ingredients:"rasdpberries,strawberries,honey filling"

      },  {
        image:".././../../assets/images/7.png",
        title:"Tiramisu",
        description:"Non-alcoholic tiramisu",
        price:7,
        details:"It contains allergens like ; egg and products of Milk or lactose and products",
        availability:true,
        ingredients:"mascarpone,cafe,cocoa powder"

      },  {
        image:".././../../assets/images/4.png",
        title:"Profiterol",
        description:"Creamy profiterol with chocolate",
        price:4,
        details:"It contains allergens like Cereals and products containing gluten",
        availability:false,
        ingredients:"chocolate, caster sugar, eggs"

      }
  ]

  buttons:Array<string>=[
  "Details","Order"
  ]

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }


  createOrder(product:menuProduct ){
     this.cartService.setItems(product)
  }

  passDetails(product:menuProduct ){
    this.cartService.passDetails(product)
 }

}
