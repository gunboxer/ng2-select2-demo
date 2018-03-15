import { TestBed, async } from '@angular/core/testing';
import { Ng2Select2HostComponent } from './ng2select2host.component';
describe('Rselect2Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Ng2Select2HostComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(Ng2Select2HostComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(Ng2Select2HostComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Ng2Select2HostComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
