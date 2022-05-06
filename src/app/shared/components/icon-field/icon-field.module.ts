import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldComponent } from './icon-field.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [IconFieldComponent],
  imports: [CommonModule, NzIconModule],
  exports: [IconFieldComponent],
})
export class IconFieldModule {}
