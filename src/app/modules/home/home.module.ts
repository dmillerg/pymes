import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { PymesCardComponent } from 'src/app/core/components/pymes-card/pymes-card.component';
import { ProductCardComponent } from 'src/app/core/components/product-card/product-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentCardComponent } from 'src/app/core/components/comment-card/comment-card.component';
import { ProductosComponent } from './productos/productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from 'src/app/core/components/product-detail/product-detail.component';
import { CarouselComponent } from 'src/app/core/components/carousel/carousel.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductosComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    PymesCardComponent,
    ProductCardComponent,
    CommentCardComponent,
    ProductDetailComponent,
    NgbModule,
    ReactiveFormsModule,
    CarouselComponent,
  ]
})
export class HomeModule { }
