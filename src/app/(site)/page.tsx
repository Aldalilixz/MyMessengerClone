import Image from "next/image";
import AuthForm from "./components/authForm";

export default function Home() {
    return (
        <div className="min-h-full py-12">
            <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
                <Image alt="Logo"
                    height={60}
                    width={60}
                    className="mx-auto w-auto"
                    src="/images/Facebook-Messenger-Logo.png" />
                <h2 className="mt-6 flex justify-center text-3xl font-bold tracking-tight text-gray-200">
                    Sign in to your account
                </h2>
                <AuthForm ></AuthForm>
            </div>
        </div>
    )
}