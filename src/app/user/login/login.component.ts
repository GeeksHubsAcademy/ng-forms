import { Component, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, DoCheck, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, DoCheck, AfterViewChecked, AfterContentChecked {
  submitted: boolean;
  errorMsg: string;
  successMsg: string;
  @ViewChild('username') username: ElementRef;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    console.log('onInit', this.username?.nativeElement);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck', this.username?.nativeElement.value);
  }
  ngAfterContentInit(): void {
    console.log('afterContentInit', this.username?.nativeElement);
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked', this.username?.nativeElement.value);
  }
  ngAfterViewInit(): void {
    this.username?.nativeElement.focus();
    // console.log('querySelector', document.querySelector('input')) // No manipular el DOM a mano
    console.log('AfterViewInit', this.username?.nativeElement, this.username?.nativeElement.value);
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked', this.username?.nativeElement.value);
  }
  ngOnDestroy(): void {
    console.log('onDestroy');
  }
  async login(loginForm: FormGroup): Promise<void> {
    try {
      this.submitted = true;
      const credentials = loginForm.value;
      const user = await this.userService.login(credentials);
      console.log(user);
      if (!user) {
        this.errorMsg = 'Usuario o contraseña incorrectos';
      } else {
        localStorage.setItem('user', JSON.stringify(user));
        this.errorMsg = '';
        this.successMsg = 'Bienvenido ' + user.username;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
