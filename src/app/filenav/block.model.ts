export class TextBlock {

  id: number;
  block_type: string;
  content: string;
  constructor(raw?: Partial<TextBlock>) {
    Object.assign<TextBlock, Partial<TextBlock>>(this, raw);
  }
}
