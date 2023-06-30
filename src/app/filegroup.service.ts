import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {File} from "./model/files.model";

const URL = "http://localhost:8080/"
const getAllFilesRoute = "getAllFiles"
const getAllGroupsRoute = "getAllGroups"
const getFilesInGroupRoute = "getFilesByGroupId/"

@Injectable({
  providedIn: 'root'
})
export class FilegroupService {

  constructor(private http: HttpClient) {}

  public getAllFiles(): Observable<any> {
    return this.http.get(URL + getAllFilesRoute);
  }

  public getAllGroups(): Observable<any> {
    return this.http.get(URL + getAllGroupsRoute);
  }

  public getFilesInGroup(group_id: string): Observable<any> {
    return this.http.get(URL + getFilesInGroupRoute + group_id);
  }

}
