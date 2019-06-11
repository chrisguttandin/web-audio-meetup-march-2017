import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent, AppModule } from '../../src/app';

describe('AppComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                RouterTestingModule
            ]
        });
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    });

    it('should render the router-outlet', async(() => {
        const fixture = TestBed.createComponent(AppComponent);

        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('router-outlet')).toBeTruthy();
    }));

});
