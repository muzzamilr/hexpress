import { EmailVO } from "@domain/valueObjects/email.vo";
import { BaseEntity, IBaseEntity } from "../base/base.entity";

export interface IUserEntity extends IBaseEntity {
  email: EmailVO;
  name: string;
  password: string;
}

export type NewUserInput = Omit<IUserEntity, "email"> & { email: string };

export class UserEntity extends BaseEntity implements IUserEntity {
  email: EmailVO;
  name: string;
  password: string;
  private constructor(userData: IUserEntity) {
    super();
    this.email = userData.email;
    this.name = userData.name;
    this.password = userData.password;
  }
  create(userData: NewUserInput) {
    return new UserEntity({
      ...userData,
      email: EmailVO.fromStr(userData.email).unwrap(),
    });
  }
}
