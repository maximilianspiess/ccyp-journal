import { Component } from '@angular/core';
import {FilegroupService} from "../filegroup.service";
import {Group} from "./group.model";

@Component({
  selector: 'app-filenav',
  templateUrl: './filenav.component.html',
  styleUrls: ['./filenav.component.sass']
})
export class FilenavComponent {
  groups: Group[] = [];

  constructor(private provider: FilegroupService) {}

  ngOnInit(): any {
    this.provider.getAllGroups().subscribe(response => this.groups = response);
  }

}
