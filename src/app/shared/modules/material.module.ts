import { NgModule } from '@angular/core';
import { SatPopoverModule } from '@ncstate/sat-popover';
import {
  MdcFabModule,
  MdcIconModule,
  MdcMenuModule,
  MdcButtonModule,
  MdcTypographyModule,
  MdcTopAppBarModule,
  MdcDrawerModule,
  MdcListModule,
  MdcCardModule,
  MdcElevationModule
} from '@angular-mdc/web';

@NgModule({
  declarations: [],
  imports: [
    SatPopoverModule,
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcButtonModule,
    MdcTypographyModule,
    MdcTopAppBarModule,
    MdcDrawerModule,
    MdcMenuModule,
    MdcListModule,
    MdcCardModule,
    MdcElevationModule
  ],
  exports: [
    SatPopoverModule,
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcButtonModule,
    MdcTypographyModule,
    MdcTopAppBarModule,
    MdcDrawerModule,
    MdcMenuModule,
    MdcListModule,
    MdcCardModule,
    MdcElevationModule
  ]
})
export class MaterialModule {}
