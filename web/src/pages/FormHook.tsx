import React from "react";
import { useForm } from "react-hook-form";


const FormHook = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values: any) => {
        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            Email: <input
                name="email"
                ref={register({
                    required: "Required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    }
                })}
            /> -
            {errors.email && errors.email.message}
            UserName:
            <input
                name="username"
                ref={register({
                    validate: value => value !== "admin" || "Nice try!"
                })}
            />
            {errors.username && errors.username.message}

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormHook;
