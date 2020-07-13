import { Component, OnInit, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  text: string;
  constructor() { }

  ngOnInit(): void {
  }
  setText(text: string): void {
    this.text = text;
  }
  showInputRef(inputRef: NgModel): void {
    console.log(inputRef);
  }
}
