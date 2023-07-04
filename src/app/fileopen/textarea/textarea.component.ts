import {Component} from '@angular/core';


@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.sass']
})
export class TextareaComponent {
  showComponent: boolean = true;
  onChange(event: any) {
    console.log(event.target.textContent)
  }
}

