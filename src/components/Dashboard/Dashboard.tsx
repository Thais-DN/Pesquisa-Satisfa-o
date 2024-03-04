"use client";
import React from "react";
import { GraficoNormal } from "./GraficoNormal";
import { GraficoPizza } from "./GraficoPizza";
import { GraficoLine } from "./GraficoLine";

export function Dashboard() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-8 text-white">
                Resultados - 2024
            </h1>
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white bg-opacity-80 rounded-lg text-center py-2 px-3">
                    <div>Porcentagem da pergunta</div>
                    <div>76%</div>
                </div>
                <div className="bg-white bg-opacity-80 rounded-lg text-center py-2 px-3">
                    <div>Porcentagem da pergunta</div>
                    <div>76%</div>
                </div>
                <div className="bg-white bg-opacity-80 rounded-lg text-center py-2 px-3">
                    <div>Porcentagem da pergunta</div>
                    <div>76%</div>
                </div>
            </div>
            <div className="space-y-8 lg:flex lg:justify-around">
                <GraficoNormal />
                <GraficoPizza />
                <GraficoLine />
            </div>
        </div>
    );
}
