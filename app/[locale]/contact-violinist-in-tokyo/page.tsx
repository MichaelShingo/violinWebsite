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

const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
};


type FormValues = {
    firstName: string;
    lastName: string;
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
        <PageLayout title="Contact" backgroundImageUrl="/norwaySeagull.jpg">
            <div className="h-fit min-h-[130vh] w-full px-28">
                <Quote>Contact me about violin <GreenText>performance</GreenText> opportunities, music <GreenText>composition</GreenText> and <GreenText>arrangement</GreenText> commissions, or anything else that is on your mind!</Quote>
                <Typography variant="h2">Send me a message</Typography>
                <Typography variant="p">I am available to perform as a violinist in Tokyo, other cities in Japan, as well as abroad. I am always happy to meet new people! If you just want to say hello, feel free to reach out.</Typography>
                <form className="my-12 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <FormRow>
                        <FormGroup>
                            <TextInput type="text" id="first-name" inputName="first-name" register={register} placeholder="John" requiredText="Please enter your first name." />
                            <Label htmlFor="firstName">First Name*</Label>
                        </FormGroup>
                        <FormGroup>
                            <TextInput type="text" id="last-name" inputName="last-name" placeholder="Taro" register={register} requiredText="Please enter your last name." />
                            <Label htmlFor="lastName">Last Name*</Label>
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <FormGroup>
                            <TextInput type="text" id="email" register={register} requiredText="Please enter an email." inputName="email" placeholder="youremail@email.com" validationPattern={{
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Please enter a valid email."
                            }} />
                            <Label htmlFor="email">Email*</Label>
                        </FormGroup>
                        <FormGroup>
                            <TextInput type="text" id="source" register={register} requiredText="Please enter a source." inputName="source" placeholder="Google, Youtube, GigSalad, at a concert..." />
                            <Label htmlFor="source">Where did you find me?</Label>
                        </FormGroup>
                    </FormRow>
                    <FormGroup fullWidth>
                        <TextInput id="message" placeholder="Hi Michael..." register={register} requiredText="Please enter a message." inputName="message" type="textarea" />
                        <Label htmlFor="message">Message*</Label>
                    </FormGroup>
                    <div className="flex w-full items-center justify-center">
                        <button className={twJoin(['border-black border-[3px] h-16 bg-black w-fit py-4 px-12 hover:bg-accent active:scale-95 hover:text-black transition text-primary'])}>Send Message</button>
                    </div>
                </form>
                <DevTool control={control} />
            </div>
        </PageLayout >
    );
};

export default Contact;
