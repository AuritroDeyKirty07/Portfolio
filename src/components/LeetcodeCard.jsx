import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ExternalLink, Trophy, Flame } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function LeetCodeStats() {
  const [stats, setStats] = useState({
    totalSolved: 333,
    easySolved: 178,
    mediumSolved: 144,
    hardSolved: 11,
    contestRating: 1529,
    ranking: 444842,
    badgesCount: 2,
  });

  useEffect(() => {
    let isMounted = true;

    async function getLeetCodeStats() {
      try {
        // Fetch from profile endpoint first, with fallback to summary endpoint
        const endpoints = [
          "https://leetcode-stats.tashif.codes/AuritroDeyKirty/profile",
          "https://leetcode-stats.tashif.codes/AuritroDeyKirty"
        ];

        let result = null;
        for (const url of endpoints) {
          try {
            const response = await fetch(url);
            if (response.ok) {
              result = await response.json();
              if (result && (result.status === "success" || result.submitStats || result.totalSolved !== undefined)) {
                break;
              }
            }
          } catch (e) {
            console.warn(`Failed fetching from ${url}`, e);
          }
        }

        if (!result) {
          throw new Error("Unable to fetch LeetCode data from endpoints");
        }

        const acList = result.submitStats?.acSubmissionNum || [];
        const findCount = (diff) => acList.find((item) => item.difficulty.toLowerCase() === diff.toLowerCase())?.count;

        const total = result.totalSolved ?? findCount("All") ?? 333;
        const easy = result.easySolved ?? findCount("Easy") ?? 178;
        const medium = result.mediumSolved ?? findCount("Medium") ?? 144;
        const hard = result.hardSolved ?? findCount("Hard") ?? 11;
        const rating = result.data?.currentRating
          ? Math.round(result.data.currentRating)
          : (result.data?.maxRating ? Math.round(result.data.maxRating) : 1529);
        const rank = result.profile?.ranking ?? result.ranking ?? 444842;
        const badges = result.data?.badgesCount ?? result.badges?.length ?? 2;

        if (isMounted) {
          setStats({
            totalSolved: total,
            easySolved: easy,
            mediumSolved: medium,
            hardSolved: hard,
            contestRating: rating,
            ranking: rank,
            badgesCount: badges,
          });
        }
      } catch (err) {
        console.error("Failed to fetch LeetCode stats:", err);
      }
    }

    getLeetCodeStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const chartData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [stats.easySolved, stats.mediumSolved, stats.hardSolved],
        backgroundColor: ["#00b8a3", "#ffc01e", "#ef4743"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    cutout: "75%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#14171d",
        titleColor: "#f8fafc",
        bodyColor: "#94a3b8",
        borderColor: "#232731",
        borderWidth: 1,
      },
    },
  };

  const openLeetCode = () => {
    window.open("https://leetcode.com/u/AuritroDeyKirty/", "_blank", "noopener,noreferrer");
  };

  return (
    <Card 
      onClick={openLeetCode}
      className="w-full bg-card border-border hover:border-primary/60 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center justify-between">
          <span className="flex items-center gap-2 group-hover:text-primary transition-colors">
            LeetCode Stats
            <ExternalLink size={15} className="opacity-40 group-hover:opacity-100 transition-opacity" />
          </span>
          <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Trophy size={13} className="text-primary" />
            Rating: {stats.contestRating}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-32 h-32 shrink-0">
            <Doughnut data={chartData} options={chartOptions} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold tracking-tight">{stats.totalSolved}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Solved</span>
            </div>
          </div>
          <div className="flex-1 w-full space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00b8a3]"></span> Easy
              </span>
              <span className="font-semibold text-foreground">{stats.easySolved}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffc01e]"></span>{" "}
                Medium
              </span>
              <span className="font-semibold text-foreground">{stats.mediumSolved}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4743]"></span> Hard
              </span>
              <span className="font-semibold text-foreground">{stats.hardSolved}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Flame size={13} className="text-amber-500" />
            Global Rank: #{stats.ranking?.toLocaleString() || "444,842"}
          </span>
          <span className="text-primary/90 font-medium group-hover:underline">
            View Profile →
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
