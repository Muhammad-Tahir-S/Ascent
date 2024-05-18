/* eslint-disable @next/next/no-img-element */
import Typography from "@/components/atoms/typography";
import { useUserStore } from "@/stores/user-store";
import clsx from "clsx";

export const LeaderboardCard = ({
  leaderboard: { name, rankings, coverPhoto },
  isHighestRanked,
}: {
  isHighestRanked: boolean;
  leaderboard: Leaderboard;
}) => {
  const { user } = useUserStore();

  const userRank =
    rankings.find((r) => r.username === user.username)?.rank || 0;

  return (
    <div className="flex flex-col items-center justify-center gap-4 group/outer">
      <Typography
        variant="body"
        fontFamily="rubikGemstones"
        className="uppercase text-pink-red opacity-0 group-hover/outer:opacity-100 transition-[opacity,color]"
      >
        {name}
      </Typography>
      <div
        className={clsx(
          "carousel-image-wrapper aspect-square transition-all duration-300 overflow-y-hidden group self-center peer/image-wrapper",
          isHighestRanked ? "w-[100%] max-w-[230px]" : "w-[90%] max-w-[200px]"
        )}
      >
        <img
          src={coverPhoto}
          className="carousel-image group-hover:translate-y-[-100%] transition-transform duration-300"
          alt=""
        />
        <div className="w-full h-full bg-pink-red group-hover:translate-y-[-100%] transition-transform duration-300 p-3">
          <Typography variant="H6" className="text-deep-purple">
            Rank: {userRank}
          </Typography>
        </div>
      </div>
    </div>
  );
};
