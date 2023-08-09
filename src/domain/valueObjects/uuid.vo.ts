import { Result } from "@carbonteq/fp";
import { ValidationError } from "@domain/entities/base/base.errors";
import { z } from "zod";
import { randomUUID } from "crypto";

class InvalidUUID extends ValidationError {
  constructor(uuid: string) {
    super(`Invalid UUID: ${uuid}`);
  }
}

export class UUIDVO {
  private constructor(private readonly inner: string) {
    this.inner;
  }

  static new(): UUIDVO {
    return new UUIDVO(randomUUID());
  }

  static fromStr(val: string): Result<UUIDVO, InvalidUUID> {
    const schema = z.string().uuid();
    const validated = schema.safeParse(val);
    if (validated.success) {
      return Result.Ok(new UUIDVO(validated.data));
    }
    return Result.Err(new InvalidUUID(val));
  }
}
