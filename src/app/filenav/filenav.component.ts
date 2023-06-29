import { Component } from '@angular/core';

@Component({
  selector: 'app-filenav',
  templateUrl: './filenav.component.html',
  styleUrls: ['./filenav.component.sass']
})
export class FilenavComponent {
  groupnames: string[] = ["groupname 1", "groupname 2", "groupname 3", "groupname 4", "groupname 5"];

}
