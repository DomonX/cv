import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prf-icon-field',
  templateUrl: './icon-field.component.html',
  styleUrls: ['./icon-field.component.scss'],
})
export class IconFieldComponent implements OnInit {
  @Input() icon: string = '';
  @Input() label: string = '';

  constructor() {}

  ngOnInit(): void {}
}
