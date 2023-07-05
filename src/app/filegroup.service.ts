import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {File} from "./filenav/file.model";
import {Group} from "./filenav/group.model";
import {TextfieldModel} from "./fileopen/textfield.model";
import {TextfieldTypeEnum} from "./fileopen/textfield-type.enum";


const URL = "http://localhost:8080/"
const GET_ALL_FILES_ROUTE = "getAllFiles"
const GET_ALL_GROUPS_ROUTE = "getAllGroups"
const GET_FILES_BY_GROUP_ID_ROUTE = "getFilesByGroupId/"
const GET_FILE_BY_ID_ROUTE = "getFileById/"
const ADD_GROUP_ROUTE = "saveGroup"
const DELETE_GROUP_BY_ID_ROUTE = "deleteGroupById/"
const ADD_FILE_ROUTE = "saveFile"
const DELETE_FILE_BY_ID_ROUTE = "deleteFileById/"

@Injectable({
  providedIn: 'root'
})
export class FilegroupService {

  constructor(private http: HttpClient) {
  }

  public getAllFiles(): Observable<File[]> {
    return this.http.get<File[]>(URL + GET_ALL_FILES_ROUTE);
  }

  public getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(URL + GET_ALL_GROUPS_ROUTE);
  }

  public getFilesInGroup(groupId: string): Observable<File[]> {
    return this.http.get<File[]>(URL + GET_FILES_BY_GROUP_ID_ROUTE + groupId);
  }

  public getFileById(fileId: string): Observable<File> {
    return this.http.get<File>(URL + GET_FILE_BY_ID_ROUTE + fileId);
  }

  public addGroup(): Observable<any> {
    //TODO trying to reload automatically after change
    return this.http.post(URL + ADD_GROUP_ROUTE, {"group_name": "New Group"});
  }

  public deleteGroupById(groupId: string) {
    //TODO does not work without subscribe!
    this.http.delete(URL + DELETE_GROUP_BY_ID_ROUTE + groupId).subscribe();
  }

  public addFileToGroup(groupId: string): void {
    this.http.post(URL + ADD_FILE_ROUTE, {
      "file_name": "New File",
      "creation_date": "14-05-2039 06:07:59",
      "group_id": groupId
    }).subscribe();
  }

  public deleteFileById(fileId: string): void {
    this.http.delete(URL + DELETE_FILE_BY_ID_ROUTE + fileId).subscribe();
  }



  saveFile(titel: string, textfields: TextfieldModel[]) {
    console.log(textfields)
    this.http.post<any>(URL + ADD_FILE_ROUTE, {
      id:"1",
      owner_id: '5',
      group_id:"1",
      file_name: titel,
      creation_date: '02-1-2018',
      text_blocks: textfields
      // text_blocks:[{
      //   block_id: "1",
      //   block_type: textfields[0].textfieldtype,
      //   block_content: textfields[0].content
      // },{
      //   block_id: "2",
      //   block_type: textfields[1].textfieldtype,
      //   block_content: textfields[1].content
      // }]
    }).subscribe(res => {

    })
  }
}
