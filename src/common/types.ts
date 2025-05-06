import { UserRole } from '@/users/entities/user.entity';

export type JwtPayload = {
  id: number;
  role: UserRole;
};
