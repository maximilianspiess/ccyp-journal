import {Component} from '@angular/core';
import {TextBlockModel} from "./textBlockModel";
import {TextfieldTypeEnum} from "./textfield-type.enum";
import {ActivatedRoute} from "@angular/router";
import {FilegroupService} from "../filegroup.service";
import {File} from "../filenav/file.model";
import {formatDate} from "@angular/common";
import {TextBlock} from "../filenav/block.model";

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
  // textBlocks: TextBlock[];

  updatedTitle: string;
  updatedGenQuestion: string;
  updatedQuestion: string;
  updatedTextArea: string;

  titel: string;

  constructor(private route: ActivatedRoute, private provider: FilegroupService) {
  }

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

  addNewTextfield(textfields: TextfieldTypeEnum) {

    const newtextfield: TextBlock = {
      id: Math.random(),
      block_type: textfields,
      content: "text"
    }
    console.log(this.currentFile.text_blocks.length)
    this.currentFile.text_blocks.push(newtextfield)
    console.log(newtextfield)
    console.log(this.currentFile.text_blocks.length)
  }


  saveFile() {
    this.provider.saveFile(this.titel, this.textfields, this.cValue)
    console.log(this.cValue)
  }

}
