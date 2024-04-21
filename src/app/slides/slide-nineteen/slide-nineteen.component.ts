import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wam-slide-nineteen',
    standalone: true,
    templateUrl: './slide-nineteen.component.html'
})
export class SlideNineteenComponent {}
