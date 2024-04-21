import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wam-slide-twenty-five',
    standalone: true,
    styleUrls: ['./slide-twenty-five.component.scss'],
    templateUrl: './slide-twenty-five.component.html'
})
export class SlideTwentyFiveComponent {}
