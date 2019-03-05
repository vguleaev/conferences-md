import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AngularMaterialModule } from './modules/angular-material.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LoaderComponent],
  imports: [CommonModule, MaterialModule, AngularMaterialModule],
  exports: [NavbarComponent, FooterComponent, LoaderComponent]
})
export class SharedModule {}
