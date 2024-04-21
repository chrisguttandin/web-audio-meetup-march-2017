import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'wam-slide-eighteen',
    standalone: true,
    templateUrl: './slide-eighteen.component.html'
})
export class SlideEighteenComponent {}
