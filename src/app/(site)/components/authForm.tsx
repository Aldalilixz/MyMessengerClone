'use client';

import Button from "@/app/components/button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>("LOGIN")
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            //something
        }

        if (variant === "LOGIN") {
            //something2
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);
        //sign in?
    }

    return (<div className="mt-8">
        <div className="bg-gray-800 px-4 py-8 shadow sm:rounded-lg">
            <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}>
                {variant === 'REGISTER' && (<Input
                    id="name"
                    label="Name"
                    register={register}
                    errors={errors}
                    required={true}
                    disabled={false} />)}
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    register={register}
                    errors={errors}
                    required={true}
                    disabled={false} />
                <Input
                    id="password"
                    label="Password"
                    type="password"
                    register={register}
                    errors={errors}
                    required={true}
                    disabled={false} />
                <div>
                    <Button
                        disabled={isLoading}
                        fullWidth
                        type="submit">
                        {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                    </Button>
                </div>
            </form>
        </div>
    </div >);
}

export default AuthForm;