import { BaseEntity, IBaseEntity } from "../base/base.entity";

export interface IUserEntity extends IBaseEntity {
  username: string;
  name: string;
  password: string;
}

export class UserEntity extends BaseEntity implements IUserEntity {
  username: string;
  name: string;
  password: string;
  private constructor(userData: IUserEntity) {
    super();
    this.username = userData.username;
    this.name = userData.name;
    this.password = userData.password;
  }
  create(userData: IUserEntity) {
    return new UserEntity(userData);
  }
}
