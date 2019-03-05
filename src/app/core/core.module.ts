import { NgModule, SkipSelf, Optional } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventsService } from "./services/events.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [EventsService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only"
      );
    }
  }
}
