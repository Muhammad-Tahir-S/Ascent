type User = { id: string; username: string; profilePhoto?: string };

type Ranking = {
  username: User["username"];
  profilePhoto?: User["profilePhoto"];
  rank: number;
  trend: { filter: "weekly" | "daily"; positions: { x: string; y: number }[] };
};

type Leaderboard = {
  id: string;
  name: string;
  userRank: number;
  rankings: Ranking[];
  coverPhoto?: string;
};
