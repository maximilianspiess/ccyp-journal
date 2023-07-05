import {Block} from "./block.model";

export class File {
  constructor(
    public id: string,
    public ownerId: number,
    public name: string,
    public creationDate: string,
    public text_blocks: Array<Block>) {}
}
