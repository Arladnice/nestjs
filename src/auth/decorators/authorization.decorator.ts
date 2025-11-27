import { applyDecorators } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/jwt.guard';

export function Authorization() {
  return applyDecorators(UseGuards(JwtGuard));
}
