import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { createGenericTestComponent } from 'test/common';
import { LoginComponent } from 'app/login/login.component';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-test-component',
  template: ''
})
export class TestComponent {
  @ViewChild(LoginComponent) instance: LoginComponent;
}
describe('LoginComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, LoginComponent]
    });
  }));

  it('should create', () => {
    fixture = createGenericTestComponent(`
      <app-login></app-login>
    `, TestComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  it('should contains username input, password input and login button', () => {
    fixture = createGenericTestComponent(`
      <app-login></app-login>
    `, TestComponent);
    component = fixture.componentInstance;

    const userNameInput = fixture.debugElement.query(By.css('input[name="username"]'));
    expect(userNameInput).toBeTruthy();

    const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
    expect(passwordInput).toBeTruthy();

    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
  });

});
