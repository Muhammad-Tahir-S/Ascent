/* eslint-disable @next/next/no-img-element */
import Typography from "@/components/atoms/typography";
import { useUserStore } from "@/stores/user-store";
import clsx from "clsx";
import { ResponsiveLine } from "@nivo/line";
import { ChevronsDown, ChevronsUp, Minus } from "lucide-react";

export const LeaderboardCard = ({
  leaderboard: { name, rankings, coverPhoto },
  isHighestRanked,
}: {
  isHighestRanked: boolean;
  leaderboard: Leaderboard;
}) => {
  const { user } = useUserStore();

  const userRanking = rankings.find((r) => r.username === user.username)!;

  return (
    <div className="flex flex-col items-center justify-center gap-2 group/outer">
      <Typography
        variant="subtitle"
        fontFamily="rubikGemstones"
        className="uppercase text-yellow opacity-0 group-hover/outer:opacity-100 transition-[opacity,color]"
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

        <UserRankSummary userRanking={userRanking} />
      </div>
    </div>
  );
};

const UserRankSummary = ({ userRanking }: { userRanking: Ranking }) => {
  const lastRanking = userRanking.trend.positions[1].y;
  const directionSinceLastRanking: "asc" | "desc" | "equal" =
    lastRanking > userRanking.rank
      ? "asc"
      : lastRanking < userRanking.rank
      ? "desc"
      : "equal";

  const iconsMap: {
    [k in typeof directionSinceLastRanking]: typeof ChevronsDown;
  } = { asc: ChevronsUp, desc: ChevronsDown, equal: Minus };
  const TrendIcon = iconsMap[directionSinceLastRanking];
  return (
    <div className="w-full h-full flex flex-col gap-2 bg-pink-red group-hover:translate-y-[-100%] transition-transform duration-300 p-3 pt-2">
      <div className="mx-auto flex items-center">
        <Typography variant="H6" className="text-yellow ">
          Rank: {userRanking.rank}
        </Typography>
        <div className="w-fit h-fit overflow-hidden">
          <TrendIcon
            className={clsx("stroke-yellow w-4 aspect-square", {
              "animate-swish-up": directionSinceLastRanking === "asc",
              "animate-swish-down": directionSinceLastRanking === "desc",
            })}
          />
        </div>
      </div>

      <div className="flex-1 h-[200px] relative w-full">
        <ResponsiveLine
          data={[
            {
              id: `${name}_user_trend`,
              color: "#ffd166",
              data: userRanking.trend.positions,
            },
          ]}
          colors="#ffd166"
          margin={{ top: 10, right: 10, bottom: 20, left: 10 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="data.yFormatted"
          pointLabelYOffset={-12}
          enableTouchCrosshair={false}
          useMesh={false}
          legends={[]}
        />
      </div>
    </div>
  );
};
