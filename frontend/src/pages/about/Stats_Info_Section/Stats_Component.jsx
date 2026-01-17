import React from "react";
import { StatsData } from "./Stats_Data";
import StatBox from "./Stat_Box";


export default function StatsComponent() {

    const renderStatsBox = StatsData.map((stat) => {
        return (
            <StatBox
                key={stat._id}
                id={stat._id}
                color={stat.color}
                count={stat.count}
                description={stat.description}
            />
        )
    })

    return (
        <div className="mt-8 flex-1 grid grid-rows-2 grid-cols-2 gap-5">
            {renderStatsBox}
        </div>
    )
}