interface IRoom {
  roomName: string;
  source: string;
}

class RoomEntity implements IRoom {
  readonly roomName: string;
  readonly source: string;
  private constructor(private readonly data: IRoom) {
    this.roomName = data.roomName;
    this.source = data.source;
  }

  static create(roomName: string, source: string) {
    return new RoomEntity({ roomName, source });
  }
}
