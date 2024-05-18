import LeaderboardsPage from "./components/leaderboards-page";

export default async function Leaderboards() {
  return <LeaderboardsPage leaderboards={leaderboards} />;
}

const leaderboards: Leaderboard[] = [
  {
    id: "ld-1",
    coverPhoto:
      "https://i.scdn.co/image/ab67616d00001e020ecc8c4fd215d9eb83cbfdb3",
    userRank: 1,
    rankings: [
      {
        user: "user-1",
        rank: 1,
        trend: { filter: "daily", positions: [1, 5, 3, 8] },
      },
      {
        user: "user-2",
        rank: 2,
        trend: { filter: "daily", positions: [2, 3, 5, 4] },
      },
    ],
  },
  {
    id: "ld-2",
    coverPhoto:
      "https://i.scdn.co/image/ab67616d00001e02a7ea08ab3914c5fb2084a8ac",
    userRank: 4,
    rankings: [
      {
        user: "user-1",
        rank: 4,
        trend: { filter: "daily", positions: [1, 5, 3, 8] },
      },
      {
        user: "user-2",
        rank: 2,
        trend: { filter: "daily", positions: [2, 3, 5, 4] },
      },
    ],
  },
  {
    id: "ld-3",
    coverPhoto:
      "https://i.scdn.co/image/ab67616d00001e021d97ca7376f835055f828139",
    userRank: 3,
    rankings: [
      {
        user: "user-1",
        rank: 3,
        trend: { filter: "daily", positions: [1, 5, 3, 8] },
      },
      {
        user: "user-2",
        rank: 2,
        trend: { filter: "daily", positions: [2, 3, 5, 4] },
      },
    ],
  },
  {
    id: "ld-4",
    coverPhoto:
      "https://i.scdn.co/image/ab67616d00001e021c0bcf8b536295438d26c70d",
    userRank: 2,
    rankings: [
      {
        user: "user-1",
        rank: 2,
        trend: { filter: "daily", positions: [2, 5, 3, 8] },
      },
      {
        user: "user-2",
        rank: 1,
        trend: { filter: "daily", positions: [1, 3, 5, 4] },
      },
    ],
  },
];
