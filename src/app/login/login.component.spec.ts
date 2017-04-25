import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { createGenericTestComponent, enter } from 'test/common';
import { LoginComponent } from 'app/login/login.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-test-component',
  template: ''
})
export class TestComponent {
  @ViewChild(LoginComponent) instance: LoginComponent;
}

function getUsernameInput(fixture) {
  return fixture.debugElement.query(By.css('input[name="username"]'));
}

function getPasswordInput(fixture) {
  return fixture.debugElement.query(By.css('input[name="password"]'));
}

function getLoginButton(fixture) {
  return fixture.debugElement.query(By.css('button'));
}

describe('LoginComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let instance: LoginComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, LoginComponent],
      providers: [AuthService]
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

    const userNameInput = getUsernameInput(fixture);
    expect(userNameInput).toBeTruthy();

    const passwordInput = getPasswordInput(fixture);
    expect(passwordInput).toBeTruthy();

    const button = getLoginButton(fixture);
    expect(button).toBeTruthy();
  });

  it('should will bind username and password with two-way binding', fakeAsync(() => {
    fixture = createGenericTestComponent(`
      <app-login></app-login>
    `, TestComponent);
    component = fixture.componentInstance;
    instance = component.instance;

    instance.username = 'yangxu';
    instance.password = 'pwd';

    fixture.detectChanges();
    tick();

    expect(getUsernameInput(fixture).nativeElement.value).toBe('yangxu');
    expect(getPasswordInput(fixture).nativeElement.value).toBe('pwd');

    enter(getUsernameInput(fixture).nativeElement, 'new name');
    enter(getPasswordInput(fixture).nativeElement, 'new pwd');

    expect(instance.username).toBe('new name');
    expect(instance.password).toBe('new pwd');
  }));


  it('should be required for username and password', () => {
    fixture = createGenericTestComponent(`
      <app-login></app-login>
    `, TestComponent);
    component = fixture.componentInstance;

    const userNameInput = getUsernameInput(fixture);
    expect(userNameInput.nativeElement.getAttribute('required')).not.toBeNull();

    const passwordInput = getPasswordInput(fixture);
    expect(passwordInput.nativeElement.getAttribute('required')).not.toBeNull();
  });

});
