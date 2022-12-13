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
        "User-Agent": "nothingapi.js/0.0.5",
        Accept: "application/json",
      },
    }
  ).then((res) => (res.ok ? res.json() : res));

  if ("userId" in results)
    return {
      userId: results.userId,
      balance: results.balance,
    };

  throw new Error(
    `Failed to fetch user: API responded with status code ${results.statusCode}`
  );
}
