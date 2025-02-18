import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-button',

  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],

})
export class ButtonComponent {
  @Input() etiqueta!: string;
  @Input() tipo: string = 'button';

}
