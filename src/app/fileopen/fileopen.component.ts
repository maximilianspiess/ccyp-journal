import {Component, Input} from '@angular/core';
import {TextfieldModel} from "./textfield.model";
import {BlockType} from "./block-type.enum";
import {HttpClient} from "@angular/common/http";
import {TitleComponent} from "./title/title.component";
import {ActivatedRoute} from "@angular/router";
import {FilegroupService} from "../filegroup.service";
import {File} from "../filenav/file.model";
import {TextBlock} from "../filenav/block.model";

@Component({
  selector: 'app-fileopen',
  templateUrl: './fileopen.component.html',
  styleUrls: ['./fileopen.component.sass']
})
export class FileopenComponent {
  // question: string;
  // private http: HttpClient;
  //
  // private readonly url = "http://localhost:8080/saveFile";
  // titel = TitleComponent.prototype.savedTitle;
  // textfields: TextfieldModel[] = [];
  //
  // textfieldTypeEnum: typeof BlockType = BlockType;
  currentFile: File;
  // textBlocks: TextBlock[];

  updatedTitle: string;
  updatedGenQuestion: string;
  updatedQuestion: string;
  updatedTextArea: string;


  constructor(private route: ActivatedRoute, private provider: FilegroupService) {}

  ngOnInit(): void {
    this.provider.getCurrentFileSubject().subscribe(id => {
      console.log(id);
      this.provider.getFileById(id).subscribe(file => this.currentFile = file);
    });
  }

  onTitleChange(title: string) {
    this.updatedTitle = title;
    console.log("onTitleChange: " + this.updatedTitle);
  }

  onGenQuestionChange(genQuestion: string) {
    this.updatedGenQuestion = genQuestion;
    console.log("onGenQuestionChange: " + this.updatedGenQuestion);
  }

  onQuestionChange(question: string) {
    this.updatedQuestion = question;
    console.log("onQuestionChange: " + this.updatedQuestion);
  }

  onTextAreaChange(textArea: string) {
    this.updatedTextArea = textArea;
    console.log("onTextAreaChange: " + this.updatedTextArea);
  }


  // addNewTextfield(textfields: BlockType) {
  //   const newtextfield: TextfieldModel = {
  //     textfieldtype: textfields,
  //     content: "dies ist ein Platzhalter"
  //   }
  //   console.log(textfields)
  //   this.textfields.push(newtextfield)
  // }
  //
  // saveFile() {
  //   this.http.post<any>(this.url, {
  //     owner_id: '5',
  //     file_name:this.titel,
  //     creation_date:'02-1-2018',
  //     text_blocks: this.textfields
  //   }).subscribe(res =>{
  //   })
  //
  //   console.log(this.titel)
  // }

  saveFile(): void {
    console.log("file saved!")
  }


}
