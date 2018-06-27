import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
          MatIconModule, MatListModule, MatCardModule, MatGridListModule,
          MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { NewProductComponent } from './new-product/new-product.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomePageComponent,
    ProductCardComponent,
    CategoryPageComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
