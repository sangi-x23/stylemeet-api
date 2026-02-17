import { JwtService } from "@nestjs/jwt";

import { Users } from "src/features/users/entities/users.entity";

import { env } from "src/global/config/env/env";

export class SetPasswordJwt {
  constructor (private readonly jwtService: JwtService) {}

  async generateToken(user: Users): Promise<string> {
    // Invalid token if something change
    const dynamicSecret = env.JWT_SECRET + user.created_at.getTime();

    const payload = {
      sub: user.id_users,
      email: user.email,
      type: 'set_password_invitation',
    };

    return this.jwtService.sign(payload, {
      secret: dynamicSecret,
      expiresIn: '48h',
    });
  }

  async validateToken(token: string, user: Users): Promise<any> {
    const dynamicSecret = env.JWT_SECRET + user.created_at.getTime();

    try {
      return this.jwtService.verify(token, { secret: dynamicSecret });
    } catch (err) {
      return null;
    }
  }
}