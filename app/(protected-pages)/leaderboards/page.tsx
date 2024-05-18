import LeaderboardsPage from "./components/leaderboards-page";

export default async function Leaderboards() {
  return <LeaderboardsPage leaderboards={leaderboards} />;
}

const leaderboards: Leaderboard[] = [
  {
    id: "ld-1",
    name: "savings",
    coverPhoto:
      "https://i.scdn.co/image/ab67616d00001e020ecc8c4fd215d9eb83cbfdb3",
    userRank: 1,
    rankings: [
      {
        username: "MT",
        rank: 1,
        trend: { filter: "daily", positions: [1, 5, 3, 8] },
      },
      {
        username: "user-2",
        rank: 2,
        trend: { filter: "daily", positions: [2, 3, 5, 4] },
      },
    ],
  },
  {
    id: "ld-2",
    name: "Scrabble comp",
    coverPhoto:
      "https://i.scdn.co/image/ab67616d00001e02a7ea08ab3914c5fb2084a8ac",
    userRank: 4,
    rankings: [
      {
        username: "MT",
        rank: 4,
        trend: { filter: "daily", positions: [1, 5, 3, 8] },
      },
      {
        username: "user-2",
        rank: 2,
        trend: { filter: "daily", positions: [2, 3, 5, 4] },
      },
    ],
  },
  {
    id: "ld-3",
    name: "leetcode grind",
    coverPhoto:
      "https://i.scdn.co/image/ab67616d00001e021d97ca7376f835055f828139",
    userRank: 3,
    rankings: [
      {
        username: "MT",
        rank: 3,
        trend: { filter: "daily", positions: [1, 5, 3, 8] },
      },
      {
        username: "user-2",
        rank: 2,
        trend: { filter: "daily", positions: [2, 3, 5, 4] },
      },
    ],
  },
  {
    id: "ld-4",
    name: "random title",
    coverPhoto:
      "https://i.scdn.co/image/ab67616d00001e021c0bcf8b536295438d26c70d",
    userRank: 2,
    rankings: [
      {
        username: "MT",
        rank: 2,
        trend: { filter: "daily", positions: [2, 5, 3, 8] },
      },
      {
        username: "user-2",
        rank: 1,
        trend: { filter: "daily", positions: [1, 3, 5, 4] },
      },
    ],
  },
];
