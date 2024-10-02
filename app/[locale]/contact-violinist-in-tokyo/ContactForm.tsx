'use client';
import FormGroup from "@/app/components/form/FormGroup";
import FormRow from "@/app/components/form/FormRow";
import Label from "@/app/components/form/Label";
import TextInput from "@/app/components/form/TextInput";
import Typography from "@/app/components/text/Typography";
import { standardPadding } from "@/app/constants/styleConstants";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { twJoin } from "tailwind-merge";

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    source: string;
    message: string;
};

const ContactForm = () => {
    const form = useForm<FormValues>();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = async (data: FormValues) => {
        console.log(data);
        try {
            const response = await fetch('/api/email/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                console.log('Message sent successfully.');
            } else {
                console.log('Message failed to send.');
            }
        } catch (error) {
            console.log('Message failed to send.');
        }
    };



    return (
        <div className={twJoin([standardPadding])}>
            <Typography variant="h2">Send me a message</Typography>
            <Typography variant="p">I am available to perform as a violinist in Tokyo, other cities in Japan, as well as abroad. I am always happy to meet new people! If you just want to say hello, feel free to reach out.</Typography>
            <form className={twJoin(['my-12 flex flex-col'])} onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormRow>
                    <FormGroup>
                        <TextInput type="text" id="first-name" inputName="firstName" register={register} placeholder="John" requiredText="Please enter your first name." error={errors.firstName} />
                        <Label htmlFor="firstName">First Name*</Label>
                    </FormGroup>
                    <FormGroup>
                        <TextInput type="text" id="last-name" inputName="lastName" placeholder="Taro" register={register} requiredText="Please enter your last name." error={errors.lastName} />
                        <Label htmlFor="lastName">Last Name*</Label>
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <TextInput type="text" id="email" register={register} requiredText="Please enter an email." inputName="email" placeholder="youremail@email.com" validationPattern={{
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email."
                        }} error={errors.email} />
                        <Label htmlFor="email">Email*</Label>
                    </FormGroup>
                    <FormGroup>
                        <TextInput type="text" id="source" register={register} inputName="source" placeholder="Google, Youtube, GigSalad, at a concert..." />
                        <Label htmlFor="source">Where did you find me?</Label>
                    </FormGroup>
                </FormRow>
                <FormGroup fullWidth>
                    <TextInput id="message" placeholder="Hi Michael..." register={register} requiredText="Please enter a message." inputName="message" type="textarea" error={errors.message} />
                    <Label htmlFor="message">Message*</Label>
                </FormGroup>
                <div className="flex w-full items-center justify-center">
                    <button className={twJoin(['border-black border-[3px] h-16 bg-black w-fit py-4 px-12 hover:bg-accent active:scale-95 hover:text-black transition text-primary'])}>Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;