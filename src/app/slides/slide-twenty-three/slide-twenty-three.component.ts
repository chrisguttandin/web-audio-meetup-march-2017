import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'wam-slide-twenty-three',
    standalone: true,
    templateUrl: './slide-twenty-three.component.html'
})
export class SlideTwentyThreeComponent {}
