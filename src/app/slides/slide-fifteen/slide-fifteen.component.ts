import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'wam-slide-fifteen',
    standalone: true,
    templateUrl: './slide-fifteen.component.html'
})
export class SlideFifteenComponent {}
