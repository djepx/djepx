import Image from "next/image";

import Strapi from "@/app/api/cms/strapi";

import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";

import styles from "./contact.module.css";
import Form from "@/app/(ui)/form/Form";

export default async function Contact() {
    const contact_raw = await Strapi.getPage("contact");
    const contact_data = contact_raw.data;
    const contact_title = contact_data.page_title.toUpperCase();
    const contact_description = contact_data.description;

    return (
        <MainWrapper>
            <article>
                <SectionWrapper gap={50}>
                    <SectionHeader title={contact_title} showSVG={true} />
                    <div className="content__wrapper">
                        <div className={styles.contact}>
                            <div
                                className={styles.content}
                                dangerouslySetInnerHTML={{
                                    __html: contact_description,
                                }}
                            ></div>
                            <Form />
                        </div>
                    </div>
                </SectionWrapper>
            </article>
            <Image
                src={
                    contact_data.banner.provider === "local"
                        ? `http://127.0.0.1:1338${contact_data.banner.url}`
                        : `${contact_data.banner.url}`
                }
                alt={contact_data.banner.alternativeText}
                width={1920}
                height={1080}
                className="banner__image"
            />
        </MainWrapper>
    );
}
