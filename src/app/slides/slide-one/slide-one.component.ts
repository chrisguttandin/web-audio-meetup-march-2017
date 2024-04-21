import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wam-slide-one',
    standalone: true,
    styleUrls: ['./slide-one.component.scss'],
    templateUrl: './slide-one.component.html'
})
export class SlideOneComponent {}
