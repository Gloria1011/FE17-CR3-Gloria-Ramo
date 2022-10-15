import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './home/header/header.component';
import { IntroductionComponent } from './home/introduction/introduction.component';
import { ReasonComponent } from './home/reason/reason.component';
import { SpecialsComponent } from './home/specials/specials.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    FooterComponent,
    MenuComponent,
    CartComponent,
    HeaderComponent,
    IntroductionComponent,
    ReasonComponent,
    SpecialsComponent,
    NavbarComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
