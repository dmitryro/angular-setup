import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '@modules/login/services/login/login.service';
import { LoginModalComponent } from '@modules/login/login-modal/login-modal.component';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LoginState } from '@store/states/login.state';

@Component({
  providers: [LoginService],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  protected loginSubs: Subscription;
  public loginMessage = 'Login in...';
  public loggingIn = true;
  public error:any = null;
  public returnUrl: string;
  public openLogin: boolean;

  get lForm() {
    return this.loginForm.controls;
  }

  constructor(
    protected loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<{login:LoginState}>
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '';
  }

  ngOnInit(): void {
      this.openLogin = true;
      this.subscribeModal();
  }

  subscribeModal() {
      this.loginSubs = this.store.select('login').subscribe(
             modal => {
                 this.onModalUpdate(modal);
             }
     );
  }

  onModalUpdate(modal): void {
     this.openLogin = modal['modal'];

  }

  openLoginModal(): void {
      this.openLogin = true;
      this.loginService.publish('open_modal', {'module':'login', 'action':'open_modal'});
  }
}
