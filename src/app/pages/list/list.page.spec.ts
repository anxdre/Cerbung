import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPage } from './list.page';
import {HomePage} from "../home/home.page";
import {IonicModule} from "@ionic/angular";

describe('ListPage', () => {
  let component: ListPage;
  let fixture: ComponentFixture<ListPage>;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
