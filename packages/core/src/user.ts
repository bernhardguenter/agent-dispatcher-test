export interface User {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
}

export interface DisplayNameOptions {
  withEmail: boolean;
}

/** The name shown in the UI, e.g. "Ada Lovelace" or "Ada Lovelace <ada@example.com>". */
export function formatDisplayName(user: User, options: DisplayNameOptions): string {
  const name = `${user.firstName} ${user.lastName}`;
  return options.withEmail ? `${name} <${user.emailAddress}>` : name;
}
