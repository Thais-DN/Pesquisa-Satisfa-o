export interface DataQuestion {
    id: number;
    type: "number" | "boolean" | "text";
    question: string;
    options?: DataQuestionsOptions[];
}

export interface DataQuestionsOptions {
    id: number;
    value: string;
}

export const DATA_QUESTIONS: DataQuestion[] = [
    {
        id: 1,
        type: "number",
        question:
            "Como você avalia a qualidade dos produtos que adquiriu conosco?",
        options: [
            {
                id: 1,
                value: "0",
            },
            {
                id: 2,
                value: "1",
            },
            {
                id: 3,
                value: "2",
            },
            {
                id: 4,
                value: "3",
            },
            {
                id: 5,
                value: "4",
            },
            {
                id: 6,
                value: "5",
            },
        ],
    },
    {
        id: 2,
        type: "number",
        question:
            "O quão satisfeito você ficou com o atendimento recebido por nossa equipe de suporte?",
        options: [
            {
                id: 1,
                value: "0",
            },
            {
                id: 2,
                value: "1",
            },
            {
                id: 3,
                value: "2",
            },
            {
                id: 4,
                value: "3",
            },
            {
                id: 5,
                value: "4",
            },
            {
                id: 6,
                value: "5",
            },
        ],
    },
    {
        id: 3,
        type: "number",
        question:
            "Como você avalia a eficácia das soluções que fornecemos para os seus problemas ou necessidades? ",
        options: [
            {
                id: 1,
                value: "0",
            },
            {
                id: 2,
                value: "1",
            },
            {
                id: 3,
                value: "2",
            },
            {
                id: 4,
                value: "3",
            },
            {
                id: 5,
                value: "4",
            },
            {
                id: 6,
                value: "5",
            },
        ],
    },
    {
        id: 4,
        type: "number",
        question:
            "Como você classificaria a facilidade de navegação e uso do nosso site ou aplicativo?",
        options: [
            {
                id: 1,
                value: "0",
            },
            {
                id: 2,
                value: "1",
            },
            {
                id: 3,
                value: "2",
            },
            {
                id: 4,
                value: "3",
            },
            {
                id: 5,
                value: "4",
            },
            {
                id: 6,
                value: "5",
            },
        ],
    },
    {
        id: 5,
        type: "number",
        question:
            "O quanto você recomendaria nossos serviços a um amigo ou colega?",
        options: [
            {
                id: 1,
                value: "0",
            },
            {
                id: 2,
                value: "1",
            },
            {
                id: 3,
                value: "2",
            },
            {
                id: 4,
                value: "3",
            },
            {
                id: 5,
                value: "4",
            },
            {
                id: 6,
                value: "5",
            },
        ],
    },
    // {
    //     id: 3,
    //     type: "boolean",
    //     question: "texto qualquer 3",
    //     options: [
    //         {
    //             id: 1,
    //             value: "sim",
    //         },
    //         {
    //             id: 2,
    //             value: "nao",
    //         },
    //     ],
    // },
    // {
    //     id: 4,
    //     type: "text",
    //     question: "texto qualquer 4",
    // },
];
