export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

/** The name shown in the UI, e.g. "Ada Lovelace". */
export function formatUser(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}
