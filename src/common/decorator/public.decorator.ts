import { SetMetadata } from '@nestjs/common';
import { ROLES_KEY } from './roles.decorator';

export const ROLES_PUBLIC = 'public';
export const Public = () => SetMetadata(ROLES_KEY, [ROLES_PUBLIC]);
