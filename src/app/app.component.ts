import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.reactiveForm = this.builder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
}
