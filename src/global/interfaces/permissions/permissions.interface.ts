export interface PermissionDefinition {
  name: string;
  description: string;
  module: string;
}

export interface ModulePermissions {
  module: string;
  permissions: PermissionDefinition[];
}