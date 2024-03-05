"use client";
import React, { useEffect, useState } from "react";
import { GraficoNormal } from "./GraficoNormal";
import { GraficoPizza } from "./GraficoPizza";
import { GraficoLine } from "./GraficoLine";

interface UserInfo {
    githubUsername: string;
    name: string;
    email: string;
    githubImage: string;
}

interface UserAnswers {
    [key: string]: string;
}

interface RespostaDoUsuario {
    [key: string]: string;
}

interface DadosDoUsuario {
    userId: string;
    respostas: RespostaDoUsuario;
}

const dadosFicticios: DadosDoUsuario[] = [
    {
        userId: "user-ficticio-1",
        respostas: {
            1: "4",
            2: "4",
            3: "3",
            4: "5",
            5: "5",
        },
    },
    {
        userId: "user-ficticio-2",
        respostas: {
            1: "4",
            2: "4",
            3: "3",
            4: "5",
            5: "5",
        },
    },
    {
        userId: "user-ficticio-3",
        respostas: {
            1: "4",
            2: "4",
            3: "3",
            4: "5",
            5: "5",
        },
    },
];

function carregarDados(): DadosDoUsuario[] {
    // Tente carregar os dados do localStorage
    const dadosDoUsuarioJson = localStorage.getItem("userAnswers") || "[]";
    let dadosDoUsuario: RespostaDoUsuario[] = JSON.parse(dadosDoUsuarioJson);

    // Verifica se dadosDoUsuario é realmente um array. Se não for, transforma em array.
    if (!Array.isArray(dadosDoUsuario)) {
        dadosDoUsuario = [dadosDoUsuario]; // Transforma o objeto em um elemento de array
    }

    // Transforma cada objeto de resposta em um objeto DadosDoUsuario
    const dadosTransformadosDoUsuario: DadosDoUsuario[] = dadosDoUsuario.map(
        (respostas) => ({
            userId: `user-${Math.random().toString(36).substr(2, 9)}`, // Gera um ID fictício
            respostas,
        })
    );

    // Combine os dados do usuário transformados com os dados fictícios
    const dadosCombinados = [...dadosFicticios, ...dadosTransformadosDoUsuario];

    return dadosCombinados;
}

function calcularMedias(dados: DadosDoUsuario[]) {
    // Especifica que as chaves são strings e os valores são números
    const totalRespostasPorPergunta: { [perguntaId: string]: number } = {};
    const quantidadeRespostasPorPergunta: { [perguntaId: string]: number } = {};
    let somaMedias = 0;
    let quantidadePerguntas = 0;

    // Coletar e somar respostas...
    dados.forEach(({ respostas }) => {
        Object.entries(respostas).forEach(([pergunta, resposta]) => {
            const valorResposta = Number(resposta);
            if (!isNaN(valorResposta)) {
                totalRespostasPorPergunta[pergunta] =
                    (totalRespostasPorPergunta[pergunta] || 0) + valorResposta;
                quantidadeRespostasPorPergunta[pergunta] =
                    (quantidadeRespostasPorPergunta[pergunta] || 0) + 1;
            }
        });
    });

    // Defina o tipo para as médias calculadas por pergunta
    type MediasPorPergunta = {
        [perguntaId: string]: number;
    };

    // Calcular média para cada pergunta
    const mediasPorPergunta = Object.entries(
        totalRespostasPorPergunta
    ).reduce<MediasPorPergunta>(
        (acc, [pergunta, total]) => {
            const media = total / quantidadeRespostasPorPergunta[pergunta];
            somaMedias += media;
            quantidadePerguntas += 1;
            acc[pergunta] = media;
            return acc;
        },
        {} as MediasPorPergunta // Fornecer um tipo explícito para o acumulador
    );

    // Calcular média geral
    const mediaGeral = somaMedias / quantidadePerguntas;

    return { mediasPorPergunta, mediaGeral };
}

export function Dashboard() {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [userAnswers, setUserAnswers] = useState<UserAnswers | null>(null);
    const [dados, setDados] = React.useState<DadosDoUsuario[]>([]);
    const { mediasPorPergunta, mediaGeral } = calcularMedias(dados);
    const [medias, setMedias] = useState({
        mediasPorPergunta: {},
        mediaGeral: 0,
    });

    useEffect(() => {
        // Carregar informações do usuário
        const storedUserInfo = localStorage.getItem("userInfo");
        if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo));
        }

        // Carregar respostas do usuário
        const storedUserAnswers = localStorage.getItem("userAnswers");
        if (storedUserAnswers) {
            setUserAnswers(JSON.parse(storedUserAnswers));
        }
    }, []);

    React.useEffect(() => {
        setDados(carregarDados());
    }, []);

    useEffect(() => {
        // Esta função deve ser chamada aqui dentro para garantir que `dados` está atualizado
        const { mediasPorPergunta, mediaGeral } = calcularMedias(dados);
        setMedias({ mediasPorPergunta, mediaGeral });
    }, [dados]); // Dependência `dados` garante a re-calculação quando os dados são atualizados

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-8 text-white">
                Resultados - 2024
            </h1>
            <div className="grid grid-cols-3 gap-4 overflow-x-auto mb-8">
                <div className="bg-white bg-opacity-80 rounded-lg text-center py-2 px-3">
                    <div>Pergunta 01</div>
                    <div>76%</div>
                </div>
                <div className="bg-white bg-opacity-80 rounded-lg text-center py-2 px-3">
                    <div>Pergunta 02</div>
                    <div>76%</div>
                </div>
                <div className="bg-white bg-opacity-80 rounded-lg text-center py-2 px-3">
                    <div>Pergunta 03</div>
                    <div>76%</div>
                </div>
                <div className="bg-white bg-opacity-80 rounded-lg text-center py-2 px-3">
                    <div>Pergunta 04</div>
                    <div>76%</div>
                </div>
                <div className="bg-white bg-opacity-80 rounded-lg text-center py-2 px-3">
                    <div>Pergunta 05</div>
                    <div>76%</div>
                </div>
                <div className="bg-white bg-opacity-80 rounded-lg text-center py-2 px-3">
                    <div>Pergunta 06</div>
                    <div>76%</div>
                </div>
            </div>
            <div className="space-y-8 lg:flex lg:justify-between">
                <GraficoNormal
                    medias={medias.mediasPorPergunta}
                    mediaGeral={medias.mediaGeral}
                />
                <GraficoLine medias={medias.mediasPorPergunta} />
                <GraficoPizza
                    medias={medias.mediasPorPergunta}
                    mediaGeral={medias.mediaGeral}
                />
            </div>

            {dados.length > 0 ? (
                dados.map((item, index) => (
                    <div key={index}>
                        <h3>{`Respostas de ${item.userId}`}</h3>
                        {Object.entries(item.respostas).map(
                            ([pergunta, resposta], idx) => (
                                <p
                                    key={idx}
                                >{`Pergunta ${pergunta}: ${resposta}`}</p>
                            )
                        )}
                    </div>
                ))
            ) : (
                <p>Nenhuma resposta disponível.</p>
            )}
        </div>
    );
}
