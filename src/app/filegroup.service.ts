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
    //TODO does not work without subscribe!
    return this.http.post(URL + ADD_GROUP_ROUTE, { "group_name": "New Group" });
  }

  public deleteGroupById(groupId: string) {
    this.http.delete(URL + DELETE_GROUP_BY_ID + groupId).subscribe();
  }

}
