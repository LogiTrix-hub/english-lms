import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LogInPayloadDto } from './auth.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async signIn(@Body() payload: LogInPayloadDto) {
    return this.authService.signIn(payload);
  }
}
