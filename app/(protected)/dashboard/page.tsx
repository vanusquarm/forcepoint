'use client'
import StatisticsCard from "@/components/shared/StatisticsCard";
import LineChart from "@/components/charts/line-chart";
import Donut from "@/components/charts/donut";
import { useTransactionQuery } from "@/data/transaction";
import { transformStreamData } from "@/utils/data-mappers";
import { useEffect } from "react";
import { useUsersQuery } from "@/data/user";
import { PartnerServiceStats } from "@/data/mockup-data/columns.d";

export default function Dashboard() {
  const { data: dailyStats } = useTransactionQuery({
    slug: "statistics?period=daily",
  });
  const { data: monthlyStats } = useTransactionQuery({
    slug: "statistics?period=monthly",
  });
  const { data: yearlyStats } = useTransactionQuery({
    slug: "statistics?period=yearly",
  });
  const { data: serviceStats } = useTransactionQuery({ slug: "services" });
  const { data: dataStream } = useTransactionQuery({ slug: "stream" });
  const { data: users } = useUsersQuery("547920f0-33e9-422a-bec8-8a9dbd147c53" );

  console.log(users);

  const serviceNames = (serviceStats as PartnerServiceStats[])?.map((item: any) => item.serviceName);
  const serviceTransactionCounts = (serviceStats as PartnerServiceStats[])?.map(
    (item: any) => item.transactionCount
  );
  const serviceTransactionStreamCounts = transformStreamData(
    dataStream as any[],
    "COUNT"
  );

  return (
    <>
      <section className="p-8">
        <div className="relative -top-14 z-10">
          <div className="flex w-full flex-wrap gap-2 md:space-x-6 md:flex-nowrap">
            <StatisticsCard name={"TODAY"} queryHook={() => dailyStats} />
            <StatisticsCard
              name={"THIS MONTH"}
              queryHook={() => monthlyStats}
            />
            <StatisticsCard name={"THIS YEAR"} queryHook={() => yearlyStats} />
          </div>
          <div className="w-full flex md:w-full md:flex flex-col mt-7 space-y-6 2xl:space-y-0  2xl:space-x-6 2xl:flex-row">
            <LineChart chartSeries={serviceTransactionStreamCounts} />
            <div className="w-full bg-white shadow rounded-md p-6 relative 2xl:w-[36%]">
              <Donut
                chartSeries={serviceTransactionCounts}
                categories={serviceNames}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
