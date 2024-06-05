import { FieldValues, RegisterOptions } from "react-hook-form";

interface InputInterface {
    inputName: string;
    inputRegisterOptions: RegisterOptions<FieldValues, string>;
    errorMessage?: string;
    placeholder?: string;
    type?: string;
}

const FormConfig: InputInterface[] = [
    {
        inputName: 'firstname',
        inputRegisterOptions: {
            required: true,
            minLength: {
                value: 3,
                message: 'Имя должно состоять минимум из 3-х символов',
            },
        },
        errorMessage: 'Имя должно быть заполнено',
        placeholder: 'Имя',
    },
    {
        inputName: 'lastname',
        inputRegisterOptions: {
            required: true,
        },
        errorMessage: 'Фамилия должна быть заполнена',
        placeholder: 'Фамилия',
    },
    {
        inputName: 'email',
        inputRegisterOptions: {
            required: true,
            pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: 'Email должен быть в формате example@example.ex',
            },
        },
        errorMessage: 'Почта должна быть заполнена',
        placeholder: 'Email',
    },
    {
        inputName: 'password',
        inputRegisterOptions: {
            required: true,
            minLength: {
                value: 5,
                message: 'Пароль должен состоять минимум из 5-ти символов',
            },
        },
        errorMessage: 'Пароль должен быть заполнен',
        placeholder: 'Пароль',
        type: 'password',
    },
    {
        inputName: 'duplicate',
        inputRegisterOptions: {
            required: true,
            validate: (value, formValues) => {
                return value === formValues.password || 'Пароли не совпадают';
            },
        },
        errorMessage: 'Необходимо повторить пароль',
        placeholder: 'Повторите пароль',
        type: 'password',
    },
];

export default FormConfig