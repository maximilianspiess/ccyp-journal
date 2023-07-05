import {Component} from '@angular/core';
import {TextBlockModel} from "./textBlockModel";
import {TextfieldTypeEnum} from "./textfield-type.enum";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FilegroupService} from "../filegroup.service";
import {File} from "../filenav/file.model";
import {generate} from "rxjs";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-fileopen',
  templateUrl: './fileopen.component.html',
  styleUrls: ['./fileopen.component.sass']
})
export class FileopenComponent {
  question: string;
  currentDate = new Date();
   cValue = formatDate(this.currentDate, 'HH:mm-dd.MM.yyyy', 'en-US');
  private readonly url = "http://localhost:8080/saveFile";
  textfields: TextBlockModel[] = []

  textfieldTypeEnum: typeof TextfieldTypeEnum = TextfieldTypeEnum
  currentFile: File;
  titel: string;
  test:string;

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

    const newtextfield: TextBlockModel = {
      block_id: Math.random().toString(),
      block_type: textfields,
      block_content: "text"
    }
    this.textfields.push(newtextfield)
  }

  saveFile() {
    this.provider.saveFile(this.titel, this.textfields,this.cValue)
    console.log(this.cValue)
  }

  addtitel($event: string) {
    this.titel = $event;
  }


}
