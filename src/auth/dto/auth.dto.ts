import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    description: 'Токен доступа',
    example: 'token',
  })
  accessToken: string;
}
