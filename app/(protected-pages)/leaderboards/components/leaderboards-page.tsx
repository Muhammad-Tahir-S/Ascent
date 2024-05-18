"use client";
import Typography from "@/components/atoms/typography";
import Input from "@/components/molecules/input";
import { LeaderboardCard } from "./leaderboard-card";

export default function LeaderboardsPage({
  leaderboards,
}: {
  leaderboards: Leaderboard[];
}) {
  const topThreeLbs = sortLeaderboards(leaderboards);

  const remainingLbs = leaderboards.filter(
    (lb) => !topThreeLbs.some(({ id }) => lb.id === id)
  );

  console.log("remainingLbs", remainingLbs);
  return (
    <div className="grid grid-rows-2 flex-1 bg-deep-purple shadow-card rounded-[6px] p-6 gap-6">
      <div className="flex flex-col gap-3">
        <Input className="w-[320px]" />

        <div className="flex-1 px-2 flex justify-center gap-2 md:gap-6 pb-4">
          {topThreeLbs.map((lb) => {
            const highestRankedLeaderboard = leaderboards.reduce((prev, curr) =>
              prev?.userRank > curr.userRank ? curr : prev
            );
            return (
              <div key={lb.id} className="flex justify-center items-center">
                <LeaderboardCard
                  isHighestRanked={highestRankedLeaderboard.id === lb.id}
                  leaderboard={lb}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="border border-pink-red">sd</div>
    </div>
  );
}

function sortLeaderboards(data: Leaderboard[]) {
  const sortedLbs = data.sort((a, b) => a.userRank - b.userRank);

  const topThree = sortedLbs.slice(0, 3);

  if (topThree.length === 3) {
    topThree.splice(1, 0, topThree.splice(0, 1)[0]);
  }

  return topThree;
}
