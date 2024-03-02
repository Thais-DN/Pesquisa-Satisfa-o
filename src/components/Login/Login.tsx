"use client";
import React, { useState } from "react";
import Head from "next/head";
import { ImageIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Login = () => {
    const router = useRouter();
    const [githubImage, setGithubImage] = useState<null | string>(null);
    const [githubUsername, setGithubUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleGithubInputBlur = async (
        event: React.FocusEvent<HTMLInputElement>
    ) => {
        const username = event.target.value.trim();
        setGithubUsername(username);

        if (!username) {
            setGithubImage(null);
            return;
        }

        const imageUrl = `https://github.com/${username}.png`;

        setGithubImage(imageUrl);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Verifica se os campos estão vazios ou se o email é inválido
        if (
            !githubUsername ||
            !name ||
            !email ||
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        router.push("/pesquisa/");
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="bg-[url('/assents/endless-constellation.svg')] flex items-center justify-center min-h-screen bg-violet-600">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl backdrop-blur-md border-none"
                >
                    <div className="flex justify-center mb-4">
                        {githubImage ? (
                            <Image
                                src={githubImage}
                                alt="imagem do perfil"
                                width={52}
                                height={52}
                                className="rounded-full"
                                onError={() => setGithubImage(null)}
                            />
                        ) : (
                            <ImageIcon className="text-orange-200 h-12 w-12" />
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-white"
                        >
                            GitHub
                        </label>
                        <div className="mt-1">
                            <input
                                id="github"
                                name="github"
                                type="text"
                                placeholder="Thais-DN"
                                required
                                onBlur={handleGithubInputBlur}
                                className="appearance-none block w-full px-3 py-2 border border-violet-300 rounded-md shadow-sm placeholder-violet-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-white"
                        >
                            Nome
                        </label>
                        <div className="mt-1">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="UserName"
                                className="appearance-none block w-full px-3 py-2 border border-violet-300 rounded-md shadow-sm placeholder-violet-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-white"
                        >
                            Email
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Seu.email@gmail.com"
                                className="appearance-none block w-full px-3 py-2 border border-violet-300 rounded-md shadow-sm placeholder-violet-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-4"></div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Iniciar
                    </button>
                </form>
            </div>
        </>
    );
};
