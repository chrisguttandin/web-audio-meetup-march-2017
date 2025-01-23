import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'wam-slide-twenty-four',
    templateUrl: './slide-twenty-four.component.html'
})
export class SlideTwentyFourComponent {}
