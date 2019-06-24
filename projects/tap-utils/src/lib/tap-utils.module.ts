import { NgModule } from '@angular/core';
import { TapUtilsComponent } from './tap-utils.component';
import { HighlightYellowDirective } from './highlight-yellow.directive';
import { LogService } from './log-service.service';

export { HighlightYellowDirective } from './highlight-yellow.directive';
export { LogService } from './log-service.service';

@NgModule({
  declarations: [TapUtilsComponent, HighlightYellowDirective],
  imports: [
  ],
  exports: [TapUtilsComponent, HighlightYellowDirective],
  providers : [LogService]
})
export class TapUtilsModule { }
