import {Component} from '@angular/core';
import {Output,EventEmitter} from "@angular/core";
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent {
  text: string;
  async onChange(event: any) {
    this.text = event.target.value
    console.log(this.text)
  }
  @Input() file;

}
