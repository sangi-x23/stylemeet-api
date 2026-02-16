import { PermissionDefinition } from "src/global/interfaces";

export const ROLES_MODULE = 'modules';

export const ModulesPermissions = {
  GET_MODULES: `${ROLES_MODULE}.get`,
  POST_MODULES: `${ROLES_MODULE}.post`,
  PATCH_MODULES: `${ROLES_MODULE}.patch`,
  DELETE_MODULES: `${ROLES_MODULE}.delete`,
} as const;

export const ModulesPermissionsMetadata: PermissionDefinition[] = [
  {
    name: ModulesPermissions.GET_MODULES,
    description: 'Can see the app modules',
    module: ROLES_MODULE,
  },
  {
    name: ModulesPermissions.POST_MODULES,
    description: 'Can create app modules',
    module: ROLES_MODULE,
  },
  {
    name: ModulesPermissions.PATCH_MODULES,
    description: 'Can delete app modules',
    module: ROLES_MODULE,
  },
  {
    name: ModulesPermissions.DELETE_MODULES,
    description: 'Can delete app modules',
    module: ROLES_MODULE,
  },
];

export const getAllModulesPermissions = () => Object.values(ModulesPermissions);