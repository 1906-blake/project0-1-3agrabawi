export class Role
{
    roleId: number // primary key
    role: string // not null, unique
    constructor(roleId: number, user_role: string)
    {
      this.roleId = roleId;
      this.role = user_role;
    }
  }
