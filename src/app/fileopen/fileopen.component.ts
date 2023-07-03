import {Component} from '@angular/core';
import {TextfieldModel} from "./textfield.model";
import {TextfieldTypeEnum} from "./textfield-type.enum";
import {HttpClient} from "@angular/common/http";
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'app-fileopen',
  templateUrl: './fileopen.component.html',
  styleUrls: ['./fileopen.component.sass']
})
export class FileopenComponent {
  question: string;
  private readonly url = "http://localhost:8080/saveFile"

  constructor(private http: HttpClient) {
  }
  titel =TitleComponent.prototype.text
  textfields: TextfieldModel[] = []
  textfieldTypeEnum: typeof TextfieldTypeEnum = TextfieldTypeEnum

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
