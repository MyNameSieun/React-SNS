// lib/keys.constant.ts
export const QUERY_KEYS = {
  profile: {
    all: ["profile"] as const,
    list: ["profile", "list"] as const,
    byId: (userId: string) => ["profile", "byId", userId] as const,
  },
};
