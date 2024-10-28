'use client';
import Typography from '../../components/text/Typography';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Quote from '@/app/components/text/Quote';
import GreenText from '@/app/components/text/GreenText';
import { twJoin } from 'tailwind-merge';
import Label from '@/app/components/form/Label';
import TextInput from '@/app/components/form/TextInput';
import FormGroup from '@/app/components/form/FormGroup';
import FormRow from '@/app/components/form/FormRow';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    source: string;
    message: string;
};

const Presenter = () => {
    const form = useForm<FormValues>();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (<PageLayout title="Arrangement" backgroundImageUrl="/norway79.jpg">
        <div className="h-fit min-h-[130vh] w-full px-28">
            <Quote>Arrangements that utilize the <GreenText>full palette</GreenText> of violin technique.</Quote>
            <Typography variant="h2">Send me a message</Typography>
            <Typography variant="p">I am available to perform as a violinist in Tokyo, other cities in Japan, as well as abroad. I am always happy to meet new people! If you just want to say hello, feel free to reach out.</Typography>
        </div>
    </PageLayout >);
};

export default Presenter;