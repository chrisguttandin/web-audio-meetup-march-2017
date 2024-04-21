import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wam-slide-nine',
    standalone: true,
    styleUrls: ['./slide-nine.component.scss'],
    templateUrl: './slide-nine.component.html'
})
export class SlideNineComponent {}
