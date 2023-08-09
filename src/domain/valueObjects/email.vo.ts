import { Result } from "@carbonteq/fp";
import { ValidationError } from "@domain/entities/base/base.errors";
import z from "zod";

class InvalidEmail extends ValidationError {
  constructor(email: string) {
    super(`Invalid Email: ${email}`);
  }
}

export class EmailVO {
  private constructor(private email: string) {
    this.email;
  }

  static fromStr(val: string): Result<EmailVO, InvalidEmail> {
    const schema = z.string().email();
    const validated = schema.safeParse(val);
    if (validated.success) {
      return Result.Ok(new EmailVO(validated.data));
    }
    return Result.Err(new InvalidEmail(val));
  }
}
