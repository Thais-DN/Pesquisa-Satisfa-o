"use client";

import "chart.js/auto";
import { Pie } from "react-chartjs-2";

interface GraficoPizzaProps {
    medias: { [pergunta: string]: number };
    mediaGeral: number;
}

export default function GraficoPizza({ medias }: GraficoPizzaProps) {
    const pieData = {
        labels: [
            "pergunta 01",
            "pergunta 02",
            "pergunta 03",
            "pergunta 04",
            "pergunta 05",
        ],
        datasets: [
            {
                data: Object.values(medias),
                backgroundColor: [
                    "rgba(114, 87, 153, 1)",
                    "rgba(255, 151, 75, 1)",
                    "rgba(175, 223, 91, 1)",
                    "rgba(237, 83, 103, 1)",
                    "rgba(51, 185, 196, 1)",
                ],
                borderColor: [
                    "rgba(114, 87, 153, 1)",
                    "rgba(255, 151, 75, 1)",
                    "rgba(175, 223, 91, 1)",
                    "rgba(237, 83, 103, 1)",
                    "rgba(51, 185, 196, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="lg:flex-1 bg-white bg-opacity-80 rounded-lg p-4 lg:w-1/3">
            <Pie data={pieData} />
        </div>
    );
}
