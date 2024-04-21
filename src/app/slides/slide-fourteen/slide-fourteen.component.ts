import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'wam-slide-fourteen',
    standalone: true,
    templateUrl: './slide-fourteen.component.html'
})
export class SlideFourteenComponent {}
