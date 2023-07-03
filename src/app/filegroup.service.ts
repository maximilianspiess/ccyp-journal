import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {File} from "./filenav/files.model";
import {Group} from "./filenav/group.model";

const URL = "http://localhost:8080/"
const GET_ALL_FILES_ROUTE = "getAllFiles"
const GET_ALL_GROUPS_ROUTE = "getAllGroups"
const GET_FILES_BY_GROUP_ID_ROUTE = "getFilesByGroupId/"
const ADD_GROUP_ROUTE = "saveGroup"
const DELETE_GROUP_BY_ID = "deleteGroupById/"
const ADD_FILE_ROUTE = "saveFile"
const DELETE_FILE_BY_ID = "deleteFileById/"

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


  public addGroup(): Observable<any> {
    //TODO trying to reload automatically after change
    return this.http.post(URL + ADD_GROUP_ROUTE, { "group_name": "New Group" });
  }

  public deleteGroupById(groupId: string) {
    //TODO does not work without subscribe!
    this.http.delete(URL + DELETE_GROUP_BY_ID + groupId).subscribe();
  }

  public addFileToGroup(groupId: string): void {
    this.http.post(URL + ADD_FILE_ROUTE, {
      "file_name": "New File",
      "creation_date": "14-05-2039 06:07:59",
      "group_id": groupId
    }).subscribe();
  }

  public deleteFileById(fileId: string) {
    this.http.delete(URL + DELETE_FILE_BY_ID + fileId).subscribe();
  }

}
