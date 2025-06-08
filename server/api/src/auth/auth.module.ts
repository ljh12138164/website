import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { DrizzleModule } from '../drizzle/drizzle.module';
import { jwtConfig } from './config/jwt.config';

@Module({
  imports: [
    UserModule,
    DrizzleModule,
    JwtModule.register({
      global: true,
      secret: jwtConfig.accessTokenSecret,
      signOptions: { expiresIn: jwtConfig.accessTokenExpiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
