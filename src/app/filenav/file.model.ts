import {TextBlock} from "./block.model";

export class File {

  id: string;
  ownerId: number;
  name: string;
  creationDate: string;
  text_blocks: TextBlock[];

  constructor(raw?: Partial<File>) {
    Object.assign<File, Partial<File>>(this, raw);
  }
}
