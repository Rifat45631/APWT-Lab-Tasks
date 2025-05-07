//jwt-auth.gurd.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) return false;

    const token = authHeader.split(' ')[1];
    if (!token) return false;

    try {
      const decoded = this.jwtService.verify(token); // verify and decode token
      request.user = decoded; // attach user info to request
      return true;
    } catch (err) {
      return false;
    }
  }
}