import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {File} from "./filenav/files.model";
import {Group} from "./filenav/group.model";

const URL = "http://localhost:8080/"
const GET_ALL_FILES_ROUTE = "getAllFiles"
const GET_ALL_GROUPS_ROUTE = "getAllGroups"
const GET_FILES_BY_GROUP_ID_ROUTE = "getFilesByGroupId/"

@Injectable({
  providedIn: 'root'
})
export class FilegroupService {

  constructor(private http: HttpClient) {}

  public getAllFiles(): Observable<File[]> {
    return this.http.get<File[]>(URL + GET_ALL_FILES_ROUTE);
  }

  public getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(URL + GET_ALL_GROUPS_ROUTE);
  }

  public getFilesInGroup(group_id: string): Observable<File[]> {
    return this.http.get<File[]>(URL + GET_FILES_BY_GROUP_ID_ROUTE + group_id);
  }

}
