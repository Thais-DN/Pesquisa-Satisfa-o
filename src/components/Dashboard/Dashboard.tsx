"use client";
import React, { useEffect, useState } from "react";
import { GraficoNormal } from "./GraficoNormal";
import { GraficoPizza } from "./GraficoPizza";
import { GraficoLine } from "./GraficoLine";
import { Tabela } from "./Tabela";

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

export interface DadosDoUsuario {
    userId: string;
    data?: string;
    processo?: string;
    respostas: { [key: string]: string };
}

interface TabelaProps {
    dados: DadosDoUsuario[]; // Passa a lista completa de dados incluindo a média calculada por usuário
    mediasPorUsuario: { [userId: string]: string }; // Médias por usuário
}

interface MediasCalculadas {
    mediasPorPergunta: { [perguntaId: string]: number };
    mediaGeral: number;
    mediasPorUsuario: { [userId: string]: string };
}

const dadosFicticios: DadosDoUsuario[] = [
    {
        userId: "Thais Dias",
        data: "03/04/2024",
        processo: "Finalizado",
        respostas: {
            1: "5",
            2: "5",
            3: "5",
            4: "5",
            5: "5",
        },
    },
    {
        userId: "Maria",
        data: "03/04/2024",
        processo: "Finalizado",
        respostas: {
            1: "3",
            2: "4",
            3: "2",
            4: "4",
            5: "2",
        },
    },
    {
        userId: "Cleiton",
        data: "03/03/2024",
        processo: "Finalizado",
        respostas: {
            1: "2",
            2: "3",
            3: "1",
            4: "5",
            5: "3",
        },
    },
    {
        userId: "José",
        data: "03/02/2024",
        processo: "Finalizado",
        respostas: {
            1: "4",
            2: "3",
            3: "3",
            4: "5",
            5: "5",
        },
    },
    {
        userId: "Josiscleide",
        data: "03/01/2024",
        processo: "Finalizado",
        respostas: {
            1: "2",
            2: "4",
            3: "3",
            4: "3",
            5: "4",
        },
    },
    {
        userId: "Augustinho",
        data: "02/29/2024",
        processo: "Finalizado",
        respostas: {
            1: "5",
            2: "2",
            3: "3",
            4: "1",
            5: "4",
        },
    },
];

function carregarDados(): DadosDoUsuario[] {
    // Carrega as informações do usuário do Local Storage
    const userInfoJson = localStorage.getItem("userInfo");
    const userInfo = userInfoJson ? JSON.parse(userInfoJson) : null;

    // Carrega as respostas e a data do usuário do Local Storage
    const surveyDataJson = localStorage.getItem("surveyData");
    const surveyData = surveyDataJson ? JSON.parse(surveyDataJson) : null;

    let usuarioCarregado = null;
    if (userInfo && surveyData && Object.keys(surveyData.answers).length > 0) {
        const dataFormatada = new Date(surveyData.date).toLocaleDateString(
            "pt-BR",
            {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            }
        );

        usuarioCarregado = {
            userId: userInfo.name,
            data: dataFormatada,
            processo: "Finalizado",
            respostas: surveyData.answers,
        };
    }

    // Combina os dados carregados com os dados fictícios, colocando os carregados no início
    const dadosCombinados = usuarioCarregado
        ? [usuarioCarregado, ...dadosFicticios] // Coloca o usuário carregado no início
        : [...dadosFicticios];

    return dadosCombinados;
}

function calcularMedias(dados: DadosDoUsuario[]): MediasCalculadas {
    const totalRespostasPorPergunta: { [perguntaId: string]: number } = {};
    const quantidadeRespostasPorPergunta: { [perguntaId: string]: number } = {};
    let somaMedias = 0;
    let quantidadePerguntas = 0;
    const mediasPorUsuario: { [userId: string]: string } = {}; // Para armazenar médias individuais por usuário

    // Coletar e somar respostas...
    dados.forEach(({ userId, respostas }) => {
        let somaRespostasUsuario = 0;
        let quantidadeRespostasUsuario = 0;

        Object.entries(respostas).forEach(([pergunta, resposta]) => {
            const valorResposta = Number(resposta);
            if (!isNaN(valorResposta)) {
                // Acumula para média por pergunta
                totalRespostasPorPergunta[pergunta] =
                    (totalRespostasPorPergunta[pergunta] || 0) + valorResposta;
                quantidadeRespostasPorPergunta[pergunta] =
                    (quantidadeRespostasPorPergunta[pergunta] || 0) + 1;

                // Acumula para média do usuário
                somaRespostasUsuario += valorResposta;
                quantidadeRespostasUsuario++;
            }
        });

        // Calcula e armazena a média do usuário atual
        const mediaUsuario = somaRespostasUsuario / quantidadeRespostasUsuario;
        mediasPorUsuario[userId] = mediaUsuario.toFixed(1);
    });

    // Calcular média para cada pergunta
    const mediasPorPergunta: { [perguntaId: string]: number } = {};
    Object.entries(totalRespostasPorPergunta).forEach(([pergunta, total]) => {
        const media = total / quantidadeRespostasPorPergunta[pergunta];
        somaMedias += media;
        quantidadePerguntas++;
        mediasPorPergunta[pergunta] = Number(media.toFixed(2)); // Garante formatação e coerência de tipo
    });

    // Calcular média geral
    const mediaGeral = Number((somaMedias / quantidadePerguntas).toFixed(2));

    return { mediasPorPergunta, mediaGeral, mediasPorUsuario };
}

export function Dashboard() {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [userAnswers, setUserAnswers] = useState<UserAnswers | null>(null);
    const [dados, setDados] = React.useState<DadosDoUsuario[]>([]);
    const [medias, setMedias] = useState<MediasCalculadas>({
        mediasPorPergunta: {},
        mediaGeral: 0,
        mediasPorUsuario: {},
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
        const { mediasPorPergunta, mediaGeral, mediasPorUsuario } =
            calcularMedias(dados);
        setMedias({ mediasPorPergunta, mediaGeral, mediasPorUsuario });
    }, [dados]); // Dependência `dados` garante a re-calculação quando os dados são atualizados

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-8 text-white">
                Resultados - 2024
            </h1>
            <div className="grid grid-cols-3 gap-4 overflow-x-auto mb-8">
                {Object.entries(medias.mediasPorPergunta).map(
                    ([perguntaId, media], index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-60 rounded-lg text-center py-2 px-3"
                        >
                            <div>{`Pergunta ${perguntaId}`}</div>
                            {/* Garanta que 'media' é tratada como número para usar '.toFixed' */}
                            <div>{`${media.toFixed(1)}%`}</div>
                        </div>
                    )
                )}
                <div className="bg-white bg-opacity-80 rounded-lg text-center py-2 px-3">
                    <div>Média Geral</div>
                    <div>{`${medias.mediaGeral.toFixed(1)}%`}</div>
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

            <Tabela mediasPorUsuario={medias.mediasPorUsuario} dados={dados} />
        </div>
    );
}
