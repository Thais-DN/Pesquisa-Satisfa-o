import { DataQuestionsInterface } from "@/data";

interface PesquisaProps {
    data: DataQuestionsInterface;
}

export function Pesquisa({ data }: PesquisaProps) {
    return (
        <div>
            <h2>{data.question}</h2>
            <div>
                {data.options.map((option) => {
                    return (
                        <div key={option.id}>
                            <input
                                type="radio"
                                value={option.value}
                                id={`${option.id}`}
                            />
                            <label htmlFor={`${option.id}`}>
                                {option.value}
                            </label>
                        </div>
                    );
                })}
            </div>
            <footer>
                <button>next</button>
            </footer>
        </div>
    );
}
