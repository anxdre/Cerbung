import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastaCardViewHolderComponent } from './pasta-card-view-holder.component';

describe('PastaCardViewHolderComponent', () => {
  let component: PastaCardViewHolderComponent;
  let fixture: ComponentFixture<PastaCardViewHolderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaCardViewHolderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastaCardViewHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
