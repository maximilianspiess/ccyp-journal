import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TextfieldModel} from "./textfield.model";
import {TextfieldTypeEnum} from "./textfield-type.enum";
import {FilegroupService} from "../filegroup.service";
import {File} from "../filenav/file.model";
import {Block} from "../filenav/block.model";

@Component({
  selector: 'app-fileopen',
  templateUrl: './fileopen.component.html',
  styleUrls: ['./fileopen.component.sass']
})
export class FileopenComponent {
  textfields: TextfieldModel[] = [];
  textfieldTypeEnum: typeof TextfieldTypeEnum = TextfieldTypeEnum;
  currentFile: File;
  textBlocks: Block[];

  constructor(private route: ActivatedRoute, private provider: FilegroupService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const fileIdFromRoute = routeParams.get("fileId");

    this.provider.getFileById(fileIdFromRoute).subscribe(response => {
      this.currentFile = response;
      this.textBlocks = response.text_blocks;
    })

  }

  addNewTextfield(textfields: TextfieldTypeEnum) {
    const newtextfield: TextfieldModel = {
      textfieldtype: textfields,
      content: "dies ist ein Platzhalter"
    }
    this.textfields.push(newtextfield)
  }


}
