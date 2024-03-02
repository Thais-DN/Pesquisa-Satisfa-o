export interface DataQuestionsInterface {
    id: number;
    type: "boolean" | "text" | "number";
    question: string;
    options: DataQuestionsOptionsInterface[];
}

export interface DataQuestionsOptionsInterface {
    id: number;
    value: string;
}

export const DATA_QUESTIONS: DataQuestionsInterface[] = [
    {
        id: 1,
        type: "boolean",
        question: "texto qualquer",
        options: [
            {
                id: 1,
                value: "false",
            },
            {
                id: 2,
                value: "true",
            },
        ],
    },
    {
        id: 2,
        type: "number",
        question: "texto qualquer 2",
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
        type: "text",
        question: "texto qualquer 4",
        options: [
            {
                id: 1,
                value: "texto 1",
            },
            {
                id: 2,
                value: "texto 2",
            },
            {
                id: 3,
                value: "texto 3",
            },
        ],
    },
];
