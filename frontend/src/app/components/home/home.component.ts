import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public homeForm: FormGroup;
  public homeMessage = 'Home in...';
  public loggingIn = false;
  public error:any = null;
  public returnUrl: string;

  get lForm() {
    return this.homeForm.controls;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.homeForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '';
  }

  ngOnInit(): void {
  }
}
