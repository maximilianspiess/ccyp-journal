import {Observable} from "rxjs";

export class Group {
  id?: string;
  group_name?: string;

  constructor(raw?: Partial<Group>) {
    Object.assign<Group, Partial<Group>>(this, raw);
  }
}
