import { Component } from '@angular/core';
import {TextareaComponent} from "../textarea/textarea.component";
import {GeneratedQuestionComponent} from "../generated-question/generated-question.component";
import {TextfieldModel} from "./textfield.model";
import {TextfieldTypeEnum} from "./textfield-type.enum";

@Component({
  selector: 'app-fileopen',
  templateUrl: './fileopen.component.html',
  styleUrls: ['./fileopen.component.sass']
})
export class FileopenComponent {
  textfields:TextfieldModel[]= []
  textfieldTypeEnum: typeof TextfieldTypeEnum =   TextfieldTypeEnum

  addNewTextfield(textfields: TextfieldTypeEnum) {
    const newtextfield: TextfieldModel = {
      textfiledtype: textfields,
      content:"dies ist ein Platzhalter"
    }
    this.textfields.push(newtextfield)
  }


}
