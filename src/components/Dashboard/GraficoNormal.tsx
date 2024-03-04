import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export function GraficoNormal() {
    const data = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
            {
                label: "Vendas 2024 (em milhares)",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(114, 87, 153, 1)",
                    "rgba(255, 151, 75, 1)",
                    "rgba(175, 223, 91, 1)",
                    "rgba(237, 83, 103, 1)",
                    "rgba(51, 185, 196, 1)",
                    "rgba(79, 45, 127, 1)",
                ],
                borderColor: [
                    "rgba(114, 87, 153, 1)",
                    "rgba(255, 151, 75, 1)",
                    "rgba(175, 223, 91, 1)",
                    "rgba(237, 83, 103, 1)",
                    "rgba(51, 185, 196, 1)",
                    "rgba(79, 45, 127, 1)",
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
