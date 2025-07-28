import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wam-slide-three',
    templateUrl: './slide-three.component.html'
})
export class SlideThreeComponent {}
