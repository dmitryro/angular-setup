import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '@modules/login/services/login/login.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoginState } from '@store/states/login.state';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  providers: [LoginService],
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('void => *', [
          style({ transform: 'scale3d(.3, .3, .3)' }),
          animate(200)
       ]),
/*
      transition('* => void', [
          animate(200, style({ transform: 'scale3d(.3, .3, .3)' }))
         ]),
*/
      transition ('* => void', [
          animate (200,
               style ({ opacity: '0' }),
          ),
       ])


    ])

  ]
})


export class LoginModalComponent implements OnInit {
  @Input() showModal = false; 
  public modalState = 'in';
  protected loginSubs: Subscription;
  public loginForm: FormGroup;
  public loginMessage = 'Login in...';
  public loggingIn = false;
  public error:any = null;
  public returnUrl: string;
  public itemForm: FormGroup;


  get lForm() {
    return this.loginForm.controls;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,          
    private store: Store<{login:LoginState}>) {
    this.loginForm = this.formBuilder.group({
         username: ['', Validators.required],
         password: ['', Validators.required]
    });
    this.returnUrl = '';

    this.itemForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email])
    });

  }

  ngOnInit(): void {
       this.subscribeModal();
  }

  subscribeModal() {
      this.loginSubs = this.store.select('login').subscribe(
             modal => {
                 this.onModalUpdate(modal);

                 this.modalState = this.showModal ? 'in' : 'out';
             }
     );
  }

  onModalUpdate(modal) {
       this.showModal = modal['modal'];
  }

  closeModal(): void {
     this.showModal = !this.showModal;
     this.loginService.publish('close_modal', {'module':'login', 'action':'close_modal'}); 
  }
}

















