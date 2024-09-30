import { FC, ReactNode } from "react";
import { UseFormRegister, ValidationRule } from "react-hook-form";
import { twJoin } from "tailwind-merge";

interface TextInputProps {
    type: 'text' | 'textarea';
    id: string;
    register: any;
    requiredText: string;
    inputName: string;
    validationPattern?: ValidationRule<RegExp>;
    placeholder?: string;

}

const TextInput: FC<TextInputProps> = ({ type, id, register, requiredText, placeholder, inputName, validationPattern }) => {
    const cn = ['border-black border-[3px] px-4 mb-6 font-paragraph font-light text-xl peer'];

    const generateInput = (): ReactNode => {
        let res: ReactNode;
        switch (type) {
            case 'textarea':
                cn.push('h-64 py-4');
                return <textarea type={type} placeholder={placeholder} className={twJoin([...cn, 'h-16 min-w-44'])} id={id} formNoValidate {...register(inputName, { required: requiredText, pattern: validationPattern })} />;
            case 'text':
                cn.push('h-16');
                return <input placeholder={placeholder} type={type} className={twJoin([...cn, 'h-16  min-w-1/2'])} id={id} formNoValidate {...register(inputName, { required: requiredText, pattern: validationPattern })} />;
            default:
                break;

        }
        return res;
    };
    return (
        <>
            {generateInput()}
        </>
    );
};

export default TextInput;