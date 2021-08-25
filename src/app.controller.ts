import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Roles } from './auth/roles.meta';
import { SkipAuth } from './auth/skip-auth.meta';
import { Role } from './enums/role.enum';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @SkipAuth()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @Get()
  @SkipAuth()
  getHello(): string {
    return this.appService.getHello();
  }
}
