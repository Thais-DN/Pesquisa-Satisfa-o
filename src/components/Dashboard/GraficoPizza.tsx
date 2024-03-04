import "chart.js/auto";
import { Pie } from "react-chartjs-2";

export function GraficoPizza() {
    const pieData = {
        labels: ["Produto A", "Produto B", "Produto C"],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "rgba(114, 87, 153, 1)",
                    "rgba(255, 151, 75, 1)",
                    "rgba(175, 223, 91, 1)",
                ],
                borderColor: [
                    "rgba(114, 87, 153, 1)",
                    "rgba(255, 151, 75, 1)",
                    "rgba(175, 223, 91, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="bg-white bg-opacity-80 rounded-lg p-4">
            <Pie data={pieData} />
        </div>
    );
}
