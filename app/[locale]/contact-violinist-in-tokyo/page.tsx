'use client';
import Typography from '../../components/text/Typography';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormValues = {
    name: string;
    email: string;
    source: string;
    message: string;
};

const Contact = () => {
    const form = useForm<FormValues>();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <PageLayout title="Violin">
            <Typography variant="h1">Contact</Typography>
            <Typography variant="p">Contact me about any ranging from violin performance opportunities in Tokyo, music composition or arrangement commissions, or anything else that is on your mind! I am available to perform as a violinist in Tokyo, other cities in Japan, as well as abroad.</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" formNoValidate {...register('name', { required: 'Please enter your name.' })} />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" formNoValidate {...register('email', {
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email."
                    }
                })} />

                <label htmlFor="source">Where did you find me?</label>
                <select id="source" {...register('source', {
                    required: 'Please specify where you found me.'
                })}>
                    <option>Hello</option>
                </select>
                <label htmlFor="message">Message</label>
                <input type="textarea" id="message" formNoValidate {...register('message', { required: 'Please enter a message.' })} />
                <button>Send Message</button>
                <p>{errors.name?.message}</p>
            </form>
            <DevTool control={control} />
        </PageLayout >
    );
};

export default Contact;
