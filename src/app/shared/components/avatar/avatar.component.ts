import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../infrastructure/base-components';

@Component({
  selector: 'prf-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent extends BaseComponent {
  @Input() public src: string = '';
}
