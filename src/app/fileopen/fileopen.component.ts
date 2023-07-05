import {Component} from '@angular/core';
import {TextfieldModel} from "./textfield.model";
import {TextfieldTypeEnum} from "./textfield-type.enum";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FilegroupService} from "../filegroup.service";
import {File} from "../filenav/file.model";

@Component({
  selector: 'app-fileopen',
  templateUrl: './fileopen.component.html',
  styleUrls: ['./fileopen.component.sass']
})
export class FileopenComponent {
  question: string;

  private readonly url = "http://localhost:8080/saveFile";
  textfields: TextfieldModel[] = []

  textfieldTypeEnum: typeof TextfieldTypeEnum = TextfieldTypeEnum
  currentFile: File;
  titel: string;

  // textBlocks: Block[];

  constructor(private route: ActivatedRoute, private provider: FilegroupService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const fileIdFromRoute = routeParams.get("fileId");


    this.provider.getFileById(fileIdFromRoute).subscribe(response => {
      this.currentFile = response;
      // this.textBlocks = response.text_blocks;
    })

  }

  addNewTextfield(textfields: TextfieldTypeEnum) {
    const newtextfield: TextfieldModel = {
      textfieldtype: textfields,
      content: "dies ist ein Platzhalter"
    }
    this.textfields.push(newtextfield)
  }

  saveFile() {
      this.provider.saveFile(this.titel, this.textfields)
  }

  addtitel($event: string) {
    this.titel = $event;
  }
}
