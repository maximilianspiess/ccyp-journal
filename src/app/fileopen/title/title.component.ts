import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent {
  @Input() title: string;
  @Output() titleChange = new EventEmitter<string>();

  onChange(event: any) {
    this.titleChange.emit(event.target.innerText);
    // console.log("title.cp.ts, onChange: " + this.title);
  }

}
