import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { LogInPayloadDto } from './auth.interface';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async signIn(@Body() payload: LogInPayloadDto) {
    return this.authService.signIn(payload);
  }

  @Get('/profile')
  async getProfile(@Request() request) {
    return request.user;
  }
}
