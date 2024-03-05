import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

// Registra o plugin de zoom e todos os elementos necessários do Chart.js
Chart.register(...registerables, zoomPlugin);

interface GraficoLineProps {
    medias: { [pergunta: string]: number };
}

export function GraficoLine({ medias }: GraficoLineProps) {
    Chart.register(...registerables, zoomPlugin);

    const timeSeriesData = {
        labels: [
            "pergunta 01",
            "pergunta 02",
            "pergunta 03",
            "pergunta 04",
            "pergunta 05",
        ],
        datasets: [
            {
                label: "Vendas 2024 (em milhares)",
                data: Object.values(medias),
                fill: false,
                borderColor: "rgb(114, 87, 153)",
                tension: 0.1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: "x" as const, // Assegura que o modo seja reconhecido corretamente pelo TypeScript
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: "x" as const, // Assegura que o modo seja reconhecido corretamente pelo TypeScript
                },
            },
        },
    };

    return (
        <div className="bg-white bg-opacity-80 rounded-lg p-4">
            <Line data={timeSeriesData} options={options} />
        </div>
    );
}
