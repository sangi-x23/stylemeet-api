import { Reflector } from "@nestjs/core";
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";

import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { Permissions } from "../entities";
import { CompanysRolesPermissions } from "../entities";

import { PERMISSIONS_KEY } from "src/global/config/decorators/permissions.decorator";

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor (
    private readonly reflector: Reflector,

    @InjectRepository(Permissions)
    private readonly permissionsRepo: Repository<Permissions>,

    @InjectRepository(CompanysRolesPermissions)
    private readonly companysRolePermRepo: Repository<CompanysRolesPermissions>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Get required permissions by rute
    const requiredPermissions = 
      this.reflector.get<string[]>(PERMISSIONS_KEY, context.getHandler()) || [];

    if (requiredPermissions.length === 0) return true;

    // Get de user data by JWT
    const req = context.switchToHttp().getRequest();
    const user = req.user;

    if (!user || !user.rol) throw new ForbiddenException('User not authenticated or rol not asigned');

    // Look for permissions
    const userPermissions = await this.companysRolePermRepo.find({
      where: {
        role: { id_roles: user.rol },
        company: { id_companys: user.company }
      },
      relations: ['id_permission']
    });

    const permissionsNames = userPermissions.map(
      (rel) => rel.permission.name,
    );

    const hasPermission = requiredPermissions.some((requiredPermission) => 
      permissionsNames.includes(requiredPermission),
    );

    if (!hasPermission) throw new ForbiddenException('Dont have permission for this action');

    return true;
  }
}