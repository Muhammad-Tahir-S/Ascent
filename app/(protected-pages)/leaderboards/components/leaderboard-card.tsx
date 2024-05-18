/* eslint-disable @next/next/no-img-element */
import Typography from "@/components/atoms/typography";
import { useUserStore } from "@/stores/user-store";
import clsx from "clsx";
import { ResponsiveLine } from "@nivo/line";

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
        <div className="w-full h-full flex flex-col gap-2 bg-pink-red group-hover:translate-y-[-100%] transition-transform duration-300 p-3 pt-2">
          <Typography
            variant="H6"
            className="text-yellow mx-auto flex items-center"
          >
            Rank: {userRanking.rank}
          </Typography>

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
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                truncateTickAt: 0,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                truncateTickAt: 0,
              }}
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
      </div>
    </div>
  );
};
