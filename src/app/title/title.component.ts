import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent {
  @Input() title;
  @Output() textEmitter= new EventEmitter<string>();
  text: string
  async onChange(event: any) {
    this.text = event.target.innerText;
    this.textEmitter.emit(this.text)
  }

}
