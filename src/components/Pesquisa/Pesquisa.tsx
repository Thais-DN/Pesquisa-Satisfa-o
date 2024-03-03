"use client";

import React, { useState } from "react";

export function Pesquisa() {
    // Estado para controlar a alternativa selecionada
    const [selected, setSelected] = useState<number | null>(null);

    // Função para lidar com a seleção de uma alternativa
    const handleSelect = (index: number) => {
        setSelected(index);
    };

    // Função para lidar com o clique no botão 'Próximo'
    const handleNext = () => {
        console.log("Resposta selecionada:", selected);
        // Aqui você pode adicionar a lógica para ir para a próxima pergunta
    };

    // Cores de hover para cada bolinha
    const hoverColors = [
        "hover:bg-red-500", // Vermelho
        "hover:bg-blue-500", // Azul
        "hover:bg-green-500", // Verde
        "hover:bg-yellow-500", // Amarelo
        "hover:bg-purple-500", // Roxo
    ];

    return (
        <div className="flex justify-center items-center h-screen bg-slate-600">
            <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                <h1 className="text-xl mb-4">
                    1. O que você acha sobre paz mundial?
                </h1>
                <div className="flex justify-center space-x-4 mb-4">
                    {hoverColors.map((color, index) => (
                        <button
                            key={index}
                            className={`h-10 w-10 rounded-full bg-slate-200 ${color} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300`}
                            onClick={() => handleSelect(index)}
                            aria-label={`Opção ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Próximo
                </button>
            </div>
        </div>
    );
}
