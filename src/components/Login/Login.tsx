// pages/login.tsx
import React from "react";
import Head from "next/head";
import { ImageIcon, LockClosedIcon } from "@radix-ui/react-icons";
import DialogDemo from "./Modal";

export const Login = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="bg-[url('/assents/endless-constellation.svg')] flex items-center justify-center min-h-screen bg-violet-600">
                <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl backdrop-blur-md border border-violet-300">
                    <div className="flex justify-center mb-4">
                        <ImageIcon className="text-violet-200 h-12 w-12" />
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
                                className="appearance-none block w-full px-3 py-2 border border-violet-300 rounded-md shadow-sm placeholder-violet-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-white"
                        >
                            Nome
                        </label>
                        <div className="mt-1">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                placeholder="UserName"
                                className="appearance-none block w-full px-3 py-2 border border-violet-300 rounded-md shadow-sm placeholder-violet-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
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
                                required
                                placeholder="Seu.email@gmail.com"
                                className="appearance-none block w-full px-3 py-2 border border-violet-300 rounded-md shadow-sm placeholder-violet-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-4"></div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </>
    );
};
