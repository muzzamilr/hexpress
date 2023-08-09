import { BaseEntity } from "../base/base.entity";

type TRoomType = "Standard" | "Deluxe" | "Suite";

interface IRoom {
  roomName: string;
  source: TRoomType;
}

export class RoomEntity extends BaseEntity implements IRoom {
  readonly roomName: string;
  readonly source: TRoomType;
  private constructor(private readonly data: IRoom) {
    super();
    this.roomName = data.roomName;
    this.source = data.source;
  }

  static create(roomProps: IRoom) {
    return new RoomEntity(roomProps);
  }
}
