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

  ngOnInit(): void {
    this.provider.getAllGroups().subscribe(response => this.groups = response);
  }

  addGroup(): void {
    // console.log("BEFORE subscribe in addGroup of filenav.c.ts")
    this.provider.addGroup().subscribe(() => this.ngOnInit()); // doesn't get called, don't know why
    // console.log("AFTER subscribe in addGroup of filenav.c.ts")
  }

}
