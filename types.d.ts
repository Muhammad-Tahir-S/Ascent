type User = { id: string; username: string; profilePhoto?: string };

type Ranking = {
  user: User["id"];
  rank: number;
  trend: { filter: "weekly" | "daily"; positions: number[] };
};

type Leaderboard = {
  id: string;
  userRank: number;
  rankings: Ranking[];
  coverPhoto?: string;
};
