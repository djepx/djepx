"use client";

import SubmitButton from "@/app/(ui)/form/SubmitButton";
import handleContactForm from "@/app/contact/form-submit";
import { useFormState } from "react-dom";

import styles from "./form.module.css";

const initialState = {
    message: "default",
};

export default function Form() {
    const [state, formAction] = useFormState(handleContactForm, initialState);
    return (
        <>
            {state.message != "good" ? (
                <>
                    {state.message === "error" ? (
                        <p className={styles.form__error}>
                            An internal error occurred. Please try again.
                        </p>
                    ) : (
                        <></>
                    )}
                    <form action={formAction} className={styles.contact__form}>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="email" name="email" placeholder="Email" />
                        <input
                            type="date"
                            name="date"
                            placeholder="Event Date"
                        />
                        <input
                            type="text"
                            name="venue"
                            placeholder="Venue Location"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                        ></textarea>
                        <SubmitButton />
                    </form>
                </>
            ) : (
                <div className={styles.form__success}>
                    <p>
                        Thank you for your submission. We&apos;ll be in touch
                        ASAP!
                    </p>
                </div>
            )}
        </>
    );
}
