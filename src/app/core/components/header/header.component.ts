import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule, ReactiveFormsModule]
})
export class HeaderComponent {

  mode: boolean = false;
  form: FormGroup= this.fb.group({
    search: [''],
  });
  @Output() emisor: EventEmitter<any>= new EventEmitter<any>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    console.log('entro');
    
    this.mode = localStorage.getItem('mode') !== 'dark-theme';
    this.onChange();
  }

  onChange() {
    this.mode = !this.mode;
    localStorage.setItem('mode', this.mode ? 'dark-theme' : 'light-theme');
    if (this.mode)
      this.document.body.classList.add('dark-theme');
    else
      this.document.body.classList.remove('dark-theme');
  }

  navigate(path: string){
    this.router.navigate(['home/productos'])
  }
}