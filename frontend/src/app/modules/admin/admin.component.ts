import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '@modules/admin/services/admin/admin.service';

@Component({
  providers: [AdminService],
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public adminForm: FormGroup;
  public adminMessage = 'Admin in...';
  public loggingIn = false;
  public error:any = null;
  public returnUrl: string;

  get lForm() {
    return this.adminForm.controls;
  }

  constructor(
    protected adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.adminForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '';
  }

  ngOnInit(): void {
  }
}
