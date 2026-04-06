import { HttpStatus } from "@nestjs/common";

export interface SuccessResponse<T> {
  status: boolean;
  message: string;
  data?: T;
}

export const successHandler = <T>(
  message = 'Operation successful',
  data?: T,
): SuccessResponse<T> => {
  return {
    status: true,
    message,
    ...(data !== undefined && { data }),
  };
};