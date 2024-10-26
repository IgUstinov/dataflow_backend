import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async signIn(
        username: string, 
        pass: string
    ): Promise<{ access_token: string }> {
        const user = await this.userService.findOneByUsername(username);
        if (user?.password_hash !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.username }
        const { password_hash, ...result } = user;
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
