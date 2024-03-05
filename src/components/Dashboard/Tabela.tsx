"use client";

import { DadosDoUsuario } from "./Dashboard";

// TabelaProps ajustado para aceitar a lista de todos os usuários (fictícios e do local storage)
interface TabelaProps {
    dados: DadosDoUsuario[]; // Lista completa de usuários
    mediasPorUsuario: { [userId: string]: string }; // Médias por usuário
}

// Componente Tabela ajustado para usar os dados fornecidos e exibir a média de respostas por usuário
export function Tabela({ dados, mediasPorUsuario }: TabelaProps) {
    return (
        <div className="overflow-x-auto mt-8 rounded-lg">
            <table className="table-auto w-full text-black text-lg lg:text-xl">
                <thead>
                    <tr className="bg-white bg-opacity-80 text-black-700">
                        <th className="border border-violet-300 px-12 py-4">
                            Nome
                        </th>
                        <th className="border border-violet-300 px-4 py-4">
                            Data
                        </th>
                        <th className="border border-violet-300 px-4 py-4">
                            Satisfação
                        </th>
                        <th className="border border-violet-300 px-4 py-4">
                            Processo
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white bg-opacity-60">
                    {dados.map((usuario, index) => (
                        <tr key={index}>
                            <td className="border border-violet-300 px-4 py-2">
                                {usuario.userId}
                            </td>
                            <td className="border border-violet-300 px-4 py-2">
                                {usuario.data}
                            </td>
                            <td className="border border-violet-300 px-4 py-2">
                                {mediasPorUsuario[usuario.userId]}%
                            </td>
                            <td className="border border-violet-300 px-4 py-2">
                                {usuario.processo}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
