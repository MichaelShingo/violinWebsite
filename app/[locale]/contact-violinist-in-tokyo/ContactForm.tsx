'use client';
import Button from "@/app/components/Button/Button";
import FormGroup from "@/app/components/form/FormGroup";
import FormRow from "@/app/components/form/FormRow";
import Label from "@/app/components/form/Label";
import TextInput from "@/app/components/form/TextInput";
import Typography from "@/app/components/text/Typography";
import { standardPadding } from "@/app/constants/styleConstants";
import { formatTranslation } from "@/app/utils/formatTranslation";
import { useTranslations } from "next-intl";
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
    const t = useTranslations('Contact');
    const { register, control, handleSubmit, formState } = form;
    const { errors, isSubmitting, isSubmitSuccessful } = formState;
    const onSubmit = async (data: FormValues) => {
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
            <Typography variant="h2">{t('sendMessage')}</Typography>
            <Typography variant="p">{formatTranslation(t('sendMessageContent'))}</Typography>
            <form className={twJoin(['my-12 flex flex-col'])} onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormRow>
                    <FormGroup>
                        <TextInput type="text" id="first-name" inputName="firstName" register={register} placeholder={t('firstNamePlaceholder')} requiredText={t('firstNameError')} error={errors.firstName} />
                        <Label htmlFor="firstName">{t('firstName')}*</Label>
                    </FormGroup>
                    <FormGroup>
                        <TextInput type="text" id="last-name" inputName="lastName" placeholder={t('lastNamePlaceholder')} register={register} requiredText={t('lastNameError')} error={errors.lastName} />
                        <Label htmlFor="lastName">{t('lastName')}*</Label>
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <TextInput type="text" id="email" register={register} requiredText={t('emailError')} inputName="email" placeholder="youremail@email.com" validationPattern={{
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: t('emailValidityError')
                        }} error={errors.email} />
                        <Label htmlFor="email">{t('email')}*</Label>
                    </FormGroup>
                    <FormGroup>
                        <TextInput type="text" id="source" register={register} inputName="source" placeholder={t('sourcePlaceholder')} />
                        <Label htmlFor="source">{t('source')}</Label>
                    </FormGroup>
                </FormRow>
                <FormGroup fullWidth>
                    <TextInput id="message" placeholder={t('messagePlaceholder')} register={register} requiredText={t('messageError')} inputName="message" type="textarea" error={errors.message} />
                    <Label htmlFor="message">{t('message')}*</Label>
                </FormGroup>
                <div className="flex w-full items-center justify-center">
                    <Button variant="primary" isLoading={isSubmitting}>{t('submitButton')}</Button>
                    {/* <button className={twJoin(['border-black border-[3px] h-16 bg-black w-fit py-4 px-12 hover:bg-accent active:scale-95 hover:text-black transition text-primary'])}>{t('submitButton')}</button> */}
                </div>
                {isSubmitSuccessful &&
                    <Typography variant="h4" className="text-center">{t('submitResult')}</Typography>
                }
            </form>
        </div>
    );
};

export default ContactForm;