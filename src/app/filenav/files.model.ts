export class File {
  id?: string;
  ownerId?: number;
  name?: string;
  creationDate?: string;
  textBlocks?: Array<Block>;

  constructor(raw?: Partial<File>) {
    Object.assign<File, Partial<File>>(this, raw);
  }
}

class Block {
  id?: number;
  type?: string;
  content?: string;
}

