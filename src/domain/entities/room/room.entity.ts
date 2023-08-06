import { BaseEntity } from "../base/base.entity";

interface IRoom {
  roomName: string;
  source: string;
}

class RoomEntity extends BaseEntity implements IRoom {
  readonly roomName: string;
  readonly source: string;
  private constructor(private readonly data: IRoom) {
    super();
    this.roomName = data.roomName;
    this.source = data.source;
  }

  static create(roomProps: IRoom) {
    return new RoomEntity(roomProps);
  }
}
