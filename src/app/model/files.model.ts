export class File {
  _id?: string;
  owner_id?: number;
  file_name?: string;
  creation_date?: string;
  text_blocks?: Array<TextBlock>;

  constructor(raw?: Partial<File>) {
    Object.assign<File, Partial<File>>(this, raw);
  }
}

class TextBlock {
  block_id?: number;
  block_type?: string;
  block_content?: string;
}

