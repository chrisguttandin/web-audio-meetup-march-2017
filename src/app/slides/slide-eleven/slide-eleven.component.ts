import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'wam-slide-eleven',
    standalone: true,
    templateUrl: './slide-eleven.component.html'
})
export class SlideElevenComponent {}
