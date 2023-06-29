import {Component, EventEmitter, Output} from '@angular/core';
import {FileopenComponent} from "../fileopen/fileopen.component";


@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.sass']
})
export class TextareaComponent {
  showComponent: boolean = true;

}

