import React from "react";

export default function Table({
  data,
}: {
  data: any;
}) {
  const excludeFields = [
    "activityLogId",
    "providerTransId",
    "partnerGtbtransId",
    "gtbtransId",
    "partnerTransId",
    "responseTime",
    "commission",
    "commissionAccount",
    "responseTime",
    "callbackUrl",
    "callbackStatus",
    "lastUpdate",
    "callbackStartTime",
    "userCallsId",
    "serviceCommission",
  ];
  return (
    <div className="overflow-x-auto bg-white p-4 rounded-md shadow">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <tbody>
          {Object?.keys(data || {})
            .filter((key) => !excludeFields.includes(key))
            .map((key) => {
              return (
                <tr key={key} className="odd:bg-white even:bg-gray-50 ">
                  <td className="px-6 py-2">{key}</td>
                  <td>{(data as any)?.[key]}</td>
                </tr>
              );
            }) || null}
        </tbody>
      </table>
    </div>
  );
}