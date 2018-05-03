import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemComponentComponent } from './blog-item-component.component';

describe('BlogItemComponentComponent', () => {
  let component: BlogItemComponentComponent;
  let fixture: ComponentFixture<BlogItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
