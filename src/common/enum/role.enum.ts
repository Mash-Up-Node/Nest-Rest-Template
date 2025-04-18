export enum BaseUserRole {
  SuperUser = 1,
  Staff = 2,
  User = 3,
}

// UserRole enum에 값을 추가해 사용하고 싶을 때.
// role column type을 해당 함수의 반환값으로 설정하면 됨.
export function createExtendedUserRole(customRoles: Record<string, number>) {
  const baseRoleKeys = new Set(Object.keys(BaseUserRole));
  const baseRoleValues = new Set(Object.values(BaseUserRole));

  // BaseUserRole과 중복 값이 있는지 확인
  for (const [key, value] of Object.entries(customRoles)) {
    if (baseRoleKeys.has(key)) {
      throw new Error(`Role key "${key}" is already defined in BaseUserRole.`);
    }
    if (baseRoleValues.has(value)) {
      throw new Error(
        `Role value "${value}" for "${key}" is already defined in BaseUserRole.`,
      );
    }
  }

  return {
    ...BaseUserRole,
    ...customRoles,
  };
}
