import {Component} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent {
  text: string;
  async onChange(event: any) {
    console.log(event.target.value)
    this.text = event.target.value
  }
}
