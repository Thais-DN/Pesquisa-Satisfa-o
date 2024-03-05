"use client";

import { Bar } from "react-chartjs-2";
import "chart.js/auto";

interface GraficoNormalProps {
    medias: { [pergunta: string]: number };
    mediaGeral: number;
}

export default function GraficoNormal({ medias }: GraficoNormalProps) {
    const data = {
        labels: [
            "pergunta 01",
            "pergunta 02",
            "pergunta 03",
            "pergunta 04",
            "pergunta 05",
        ],
        datasets: [
            {
                label: "Satisfação do usuário",
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

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="bg-white bg-opacity-80 rounded-lg p-4">
            <Bar data={data} options={options} />
        </div>
    );
}
