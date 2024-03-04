"use client";

import { Pesquisa } from "@/components/Pesquisa/Pesquisa";
import { DATA_QUESTIONS } from "@/data";
import { useEffect, useState } from "react";

export interface UserInfo {
    githubUsername: string;
    name: string;
    email: string;
    githubImage: string;
}

export default function Page() {
    const [userInfo, setUserInfo] = useState<null | UserInfo>(null);

    useEffect(() => {
        // Recuperar informações do localStorage ao carregar a página
        const storedUserInfo = localStorage.getItem("userInfo");
        if (storedUserInfo) {
            const userInfo = JSON.parse(storedUserInfo);
            setUserInfo(userInfo);
        }
    }, []);

    return (
        <div>
            {userInfo && (
                <Pesquisa user={userInfo} questions={DATA_QUESTIONS} />
            )}
        </div>
    );
}
