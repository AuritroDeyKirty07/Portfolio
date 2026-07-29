import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";


ChartJS.register(ArcElement, Tooltip, Legend);

export default function LeetCodeStats() {
  const [stats, setStats] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    contributionPoints: 1446,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function getLeetCodeStats() {
    const query = `
    query userSessionProgress($username: String!) {
        matchedUser(username: $username) {
            submitStats {
                acSubmissionNum {
                    difficulty
                    count
                }
            }
        }
    }
    `;

    try {
      const response = await fetch(
        "https://corsproxy.io/?https://leetcode.com/graphql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: {
              username: "AuritroDeyKirty",
            },
          }),
        },
      );

      const result = await response.json();

      if (!result?.data?.matchedUser) {
  throw new Error("LeetCode user not found");
}

const submissions = result.data.matchedUser.submitStats.acSubmissionNum;

      setStats({
        totalSolved: submissions[0].count,
        easySolved: submissions[1].count,
        mediumSolved: submissions[2].count,
        hardSolved: submissions[3].count,
        contributionPoints: 1446,
      });
    } catch (err) {
  console.error("Failed to fetch LeetCode stats:", err);

    } finally {
      setLoading(false);
    }
  }
    getLeetCodeStats();
  }, []);



  if (loading) {
    return (
      <Card className="w-full h-full min-h-[300px] flex items-center justify-center animate-pulse bg-secondary/50">
        <p className="text-muted-foreground">Loading LeetCode Stats...</p>
      </Card>
    );
  }

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

  return (
    <Card className="w-full bg-card border-border hover:border-primary/50 transition-colors duration-300 cursor-pointer">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center justify-between">
          <span>LeetCode Stats</span>
          <span className="text-sm font-normal text-muted-foreground bg-secondary px-3 py-1 rounded-full">
            Rating: {stats.contributionPoints || 1446}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-32 h-32">
            <Doughnut data={chartData} options={chartOptions} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{stats.totalSolved}</span>
              <span className="text-xs text-muted-foreground">Solved</span>
            </div>
          </div>
          <div className="flex-1 w-full space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00b8a3]"></span> Easy
              </span>
              <span className="font-semibold">{stats.easySolved}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffc01e]"></span>{" "}
                Medium
              </span>
              <span className="font-semibold">{stats.mediumSolved}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ef4743]"></span> Hard
              </span>
              <span className="font-semibold">{stats.hardSolved}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
