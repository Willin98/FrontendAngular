import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from '@film-core/components/header/header.component';
import { NavbarComponent } from '@film-core/components/navbar/navbar.component';
import { FooterComponent } from '@film-core/components/footer/footer.component';

@NgModule({
  declarations: [PublicComponent, HeaderComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
