/* eslint-disable @next/next/no-img-element */
import { useUserStore } from "@/stores/user-store";
import clsx from "clsx";

export const LeaderboardCard = ({
  leaderboard: { id, rankings, coverPhoto },
  isHighestRanked,
}: {
  isHighestRanked: boolean;
  leaderboard: Leaderboard;
}) => {
  const { user } = useUserStore();

  const userRank = rankings.find((r) => r.user === user.id)?.rank || 0;

  return (
    <div
      className={clsx(
        "carousel-image-wrapper aspect-square transition-all duration-300 overflow-y-hidden group",
        isHighestRanked ? "w-[100%] max-w-[230px]" : "w-[90%] max-w-[200px]"
      )}
    >
      <img
        src={coverPhoto}
        className="carousel-image group-hover:translate-y-[-100%] transition-transform duration-300"
        alt=""
      />
      <div className="w-full h-full bg-pink-red group-hover:translate-y-[-100%] transition-transform duration-300 p-3">
        Rank: {userRank}
      </div>
    </div>
  );
};
