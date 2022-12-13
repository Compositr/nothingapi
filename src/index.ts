export const userIdRegex = /^\d{10,}$/g;

export default async function getUser(userId: string) {
  if (!userIdRegex.test(userId))
    throw new TypeError(
      "Invalid userId. userId must be a valid Discord ID (Snowflake)"
    );

  const results = await fetch(
    `https://nothingapi.crypticcode.org/users/${userId}`,
    {
      headers: {
        "User-Agent": "nothingapi.js/0.0.2",
        Accept: "application/json",
      },
    }
  ).then((res) => res.json());

  return {
    userId: results.userId,
    balance: results.balance,
  };
}
