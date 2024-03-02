"use client";
import React from "react";
import { DATA_QUESTIONS } from "@/data";
// import { Pesquisa } from "@/components/Pesquisa/Pesquisa";
import Teste from "@/components/Pesquisa/teste";

export default function Page() {
    const question = DATA_QUESTIONS[2];

    return (
        <div>
            <Teste />
            {/* {DATA_QUESTIONS.map((question) => {
                return (
                    <div key={question.id}>
                        <h2>{question.question}</h2>
                    </div>
                );
            })} */}
        </div>
    );
}
