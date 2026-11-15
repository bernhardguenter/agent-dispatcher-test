import { formatUser, type User } from "@test/core";

/** Title of the page header for a signed-in user. */
export function headerTitle(user: User): string {
  return `Signed in as ${formatUser(user)}`;
}
