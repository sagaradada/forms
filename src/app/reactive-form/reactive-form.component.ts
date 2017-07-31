import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl('', Validators.compose ([
          Validators.required,
        Validators.minLength(3),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastname: new FormControl('', this.textValidator),
      phone: new FormControl(''),
    });
  }

  textValidator(control) {
    if (control.value.length < 3) {
      return {'lastname': true};
    }

  }
  onSend = function (log) {
    console.log(log)

  }
}
