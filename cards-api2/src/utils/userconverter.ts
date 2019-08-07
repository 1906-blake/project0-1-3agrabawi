import { User } from '../models/users';
import { Role } from '../models/role';

export function convertUser(row) {
    return new User(row.user_id, row.username, '', row.first_name, row.last_name, row.email,
        row.role_id && new Role(row.role_id, row.role));
}