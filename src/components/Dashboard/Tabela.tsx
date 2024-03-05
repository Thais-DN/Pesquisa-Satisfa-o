export function Tabela() {
    const dadosTabela = [
        {
            nome: "Thais",
            data: "04/03/2024",
            satisfacao: "80%",
            processo: "Andamento",
        },
        {
            nome: "Ynhago",
            data: "02/03/2024",
            satisfacao: "70%",
            processo: "Finalizado",
        },
        {
            nome: "Maggie",
            data: "01/03/2024",
            satisfacao: "30%",
            processo: "Finalizado",
        },
        {
            nome: "Sapato",
            data: "01/03/2024",
            satisfacao: "70%",
            processo: "Finalizado",
        },
    ];

    return (
        <div className="overflow-x-auto mt-8">
            <table className="table-auto w-full text-white">
                <thead>
                    <tr className="bg-white bg-opacity-80 text-violet-700">
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
                <tbody className="bg-white bg-opacity-40">
                    {dadosTabela.map((item, index) => (
                        <tr key={index}>
                            <td className="border border-violet-300 px-4 py-2">
                                {item.nome}
                            </td>
                            <td className="border border-violet-300 px-4 py-2">
                                {item.data}
                            </td>
                            <td className="border border-violet-300 px-4 py-2">
                                {item.satisfacao}
                            </td>
                            <td className="border border-violet-300 px-4 py-2">
                                {item.processo}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
