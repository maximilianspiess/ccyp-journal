import {Component, Input} from '@angular/core';
import {FilegroupService} from "../../filegroup.service";
import {Observable} from "rxjs";
import {File} from "../file.model";
import {Group} from "../group.model";

@Component({
  selector: 'app-filegroup',
  templateUrl: './filegroup.component.html',
  styleUrls: ['./filegroup.component.sass']
})
export class FilegroupComponent {

  @Input() group;
  files: File[] = [];
  currentFile: File;

  constructor(private provider: FilegroupService) {}

  ngOnInit(): void {
    this.provider.getFilesInGroup(this.group.id).subscribe(response => {
      response.forEach(file => this.files.push(file))
    })
  }

  loadFile(fileId: string): void {
      this.provider.setCurrentFile(fileId);
    // console.log(this.currentFile.id);
  }

  addFileToGroup(groupId: string): void {
    this.provider.addFileToGroup(groupId);
    window.location.reload();
  }

  deleteFileById(fileId: string): void {
    this.provider.deleteFileById(fileId);
    window.location.reload();
  }

  deleteGroupById(groupId: string): void {
    this.provider.deleteGroupById(groupId);
    window.location.reload();
  }

}
