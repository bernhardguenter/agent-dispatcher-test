import { type User } from "@test/core";

/** Body of GET /api/users/:id. Clients rely on these field names. */
export function userResponse(user: User) {
  return {
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
  };
}
