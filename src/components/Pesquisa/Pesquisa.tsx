"use client";

import React, { useEffect, useState } from "react";
import { DataQuestion } from "@/data";
import { UserInfo } from "@/app/pesquisa/page";
import * as Progress from "@radix-ui/react-progress";
import { useRouter } from "next/router";

interface PesquisaProps {
    questions: DataQuestion[];
    user: UserInfo;
}

// Função para formatar a data atual no formato dd/mm/aaaa
const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

export function Pesquisa({ questions, user }: PesquisaProps) {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [surveyData, setSurveyData] = useState<{
        answers: { [key: number]: string };
        userInfo: UserInfo | null;
        date: string;
    }>({
        answers: {},
        userInfo: null,
        date: formatDate(new Date()), // Inicializa com a data atual formatada
    });
    const [surveyComplete, setSurveyComplete] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const savedData = localStorage.getItem("surveyData");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setSurveyData({
                ...parsedData,
                date: parsedData.date
                    ? parsedData.date
                    : formatDate(new Date()), // Usa a data salva ou a data atual, se não estiver disponível
            });
        } else {
            // Inicializa com as informações do usuário e a data atual se não houver dados salvos
            setSurveyData((prev) => ({
                ...prev,
                userInfo: user,
                date: formatDate(new Date()), // Atualiza para usar a função de formatação
            }));
        }
    }, [user]);

    const handleAnswerChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        questionId: number
    ) => {
        const newAnswers = {
            ...surveyData.answers,
            [questionId]: event.target.value,
        };
        const newData = {
            ...surveyData,
            answers: newAnswers,
            date: formatDate(new Date()),
        }; // Atualiza a data sempre que as respostas mudam
        setSurveyData(newData);
        localStorage.setItem("surveyData", JSON.stringify(newData));
    };

    const handleNext = () => {
        const questionId = questions[currentQuestion].id; // Obtenha o ID da pergunta atual

        // Aqui, usamos `surveyData.answers` para acessar `answers` corretamente
        if (surveyData.answers[questionId] === undefined) {
            alert("Por favor, selecione uma opção antes de continuar.");
            return;
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setSurveyComplete(true);
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100; // Calcula o progresso em %

    // Conteúdo que será exibido quando a pesquisa for concluída
    if (surveyComplete) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center p-10 bg-white bg-opacity-50 rounded-lg shadow-xl">
                    <h1 className="text-2xl mb-4">Pesquisa concluída!</h1>
                    <p>
                        Obrigado {user.name} por participar da nossa pesquisa.
                    </p>
                    <button
                        onClick={() => {
                            router.push("/dashboard/");
                        }}
                        className="mt-4 px-4 py-2 text-white rounded bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                    >
                        Ir para o Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center p-10 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col h-1/2 w-4/5">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl">
                        {question.id}. {question.question}
                    </span>
                </div>

                <div className="flex-grow flex items-center justify-center">
                    {question.type === "text" ? (
                        <input
                            type="text"
                            value={surveyData.answers[question.id] || ""}
                            onChange={(e) => handleAnswerChange(e, question.id)}
                            className="text-center"
                        />
                    ) : (
                        <div className="flex w-full justify-between px-10">
                            {question.options?.map((answer) => (
                                <label
                                    key={answer.id}
                                    className="flex flex-col items-center"
                                >
                                    <input
                                        type="radio"
                                        name={`question_${question.id}`}
                                        value={answer.value}
                                        checked={
                                            surveyData.answers[question.id] ===
                                            answer.value
                                        }
                                        onChange={(e) =>
                                            handleAnswerChange(e, question.id)
                                        }
                                        className="h-10 w-10 rounded-full bg-slate-200 focus:outline-none focus:ring-slate-300"
                                    />
                                    <span>{answer.value}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div className="w-full flex justify-between items-center px-4 py-2">
                    {currentQuestion > 0 && (
                        <button
                            onClick={handleBack}
                            className="px-4 py-2 text-white rounded bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                        >
                            Voltar
                        </button>
                    )}

                    <div className="flex-grow mx-4">
                        <Progress.Root
                            value={progress}
                            max={100}
                            className="w-full bg-gray-200 rounded-full h-2.5"
                        >
                            <Progress.Indicator
                                style={{ width: `${progress}%` }}
                                className="bg-green-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                            />
                        </Progress.Root>
                    </div>

                    <button
                        onClick={handleNext}
                        className="px-4 py-2 text-white rounded bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                    >
                        Próximo
                    </button>
                </div>
            </div>
        </div>
    );
}
