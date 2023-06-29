import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-filegroup',
  templateUrl: './filegroup.component.html',
  styleUrls: ['./filegroup.component.sass']
})
export class FilegroupComponent {

  @Input() groupname = "";
  filenames: string[] = ["title 1", "title 2", "title 3"];

}
