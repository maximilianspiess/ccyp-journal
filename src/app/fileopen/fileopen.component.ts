import {Component} from '@angular/core';
import {TextfieldModel} from "./textfield.model";
import {TextfieldTypeEnum} from "./textfield-type.enum";
import {HttpClient} from "@angular/common/http";
import {TitleComponent} from "../title/title.component";
import {Output,EventEmitter} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FilegroupService} from "../filegroup.service";
import {File} from "../filenav/file.model";
import {Block} from "../filenav/block.model";

@Component({
  selector: 'app-fileopen',
  templateUrl: './fileopen.component.html',
  styleUrls: ['./fileopen.component.sass']
})
export class FileopenComponent {
  question: string;
  private http: HttpClient;

  private readonly url = "http://localhost:8080/saveFile"
  titel =TitleComponent.prototype.text
  textfields: TextfieldModel[] = []

  textfieldTypeEnum: typeof TextfieldTypeEnum = TextfieldTypeEnum
  currentFile: File;
  // textBlocks: Block[];

  constructor(private route: ActivatedRoute, private provider: FilegroupService) {}

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
    console.log(textfields)
    this.textfields.push(newtextfield)
  }
  saveFile() {
    this.http.post<any>(this.url, {
      owner_id: '5',
      file_name:this.titel,
      creation_date:'02-1-2018',
      text_blocks: this.textfields
    }).subscribe(res =>{
    })

    console.log(this.titel)
  }


}
