/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

import Strapi from "@/app/api/cms/strapi";

import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import Card from "@/app/(ui)/card/Card";
import BookNow from "@/app/(ui)/book_now/BookNow";
import Testimonial from "@/app/(ui)/testimonial/Testimonial";
import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";

export default async function Services() {
    // main content
    const services_page_raw = await Strapi.getPage("service");
    const services_page_data = services_page_raw.data;
    const page_title = services_page_data.page_title.toUpperCase();
    const page_description = services_page_data.page_description;
    const page_banner = services_page_data.page_banner_image;

    // nightclubs & festivals section
    const nightclubs_section_raw = await Strapi.getPage(
        "nightclubs-and-festivals"
    );
    const nightclubs_section_data = nightclubs_section_raw.data;
    const nightclubs_title =
        nightclubs_section_data.section_title.toUpperCase();
    const nightclubs_description = nightclubs_section_data.section_description;

    // current residencies subsection
    const current_residencies_raw = await Strapi.getCurrentResidencies();
    const current_residencies_data = current_residencies_raw.data;

    // weddings and private events section
    const weddings_section_row = await Strapi.getPage(
        "weddings-and-private-events"
    );
    const weddings_section_data = weddings_section_row.data;
    const weddings_title = weddings_section_data.section_title.toUpperCase();
    const weddings_description = weddings_section_data.section_description;
    const weddings_banner = weddings_section_data.section_banner;

    // audio & lighting subsection
    const audio_section_raw = await Strapi.getPage("audio-and-lighting");
    const audio_section_data = audio_section_raw.data;
    const audio_title = audio_section_data.section_title.toUpperCase();
    const audio_description = audio_section_data.section_description;

    // photobooth subsection
    const photobooth_section_raw = await Strapi.getPage("photobooth");
    const photobooth_section_data = photobooth_section_raw.data;
    const photobooth_title =
        photobooth_section_data.section_title.toUpperCase();
    const photobooth_description = photobooth_section_data.section_description;

    // testimonials
    const testimonials_raw = await Strapi.getTestimonials();
    const testimonials_data = testimonials_raw.data;

    return (
        <MainWrapper>
            <article>
                <SectionWrapper gap={50}>
                    <SectionHeader title={page_title} showSVG={true} />
                    <div className="content__wrapper">
                        <p>{page_description}</p>
                        <Image
                            src={
                                page_banner.provider === "local"
                                    ? `http://127.0.0.1:1338${page_banner.url}`
                                    : `${page_banner.url}`
                            }
                            alt={page_banner.alternativeText}
                            width={1280}
                            height={650}
                            className="section__banner"
                        />
                    </div>
                </SectionWrapper>
                <SectionWrapper gap={100} id="nightclubs_festivals">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "50px",
                        }}
                    >
                        <SectionHeader
                            title={nightclubs_title}
                            showSVG={true}
                        />
                        <div className="content__wrapper">
                            <p>{nightclubs_description}</p>
                        </div>
                    </div>
                    <SectionWrapper gap={50}>
                        <SectionHeader
                            title="CURRENT RESIDENCIES"
                            size="smaller"
                            showSVG={false}
                        />
                        {current_residencies_data.length > 0 ? (
                            <div className="cards">
                                {current_residencies_data.map(
                                    (venue: any, index: number) => (
                                        <Card
                                            key={index}
                                            club_name={venue.name}
                                            location={venue.location}
                                            background_path={
                                                venue.background_image
                                                    .provider === "local"
                                                    ? `http://127.0.0.1:1338${venue.background_image.url}`
                                                    : `${venue.background_image.url}`
                                            }
                                            next_appearances={
                                                venue.next_appearances
                                            }
                                            venue_link="https://echostage.com/"
                                        />
                                    )
                                )}
                            </div>
                        ) : (
                            <p>no residencies to show, check back later</p>
                        )}
                    </SectionWrapper>
                    <SectionWrapper gap={50}>
                        <SectionHeader
                            title="CAREER HIGHLIGHTS"
                            size="smaller"
                            showSVG={false}
                        />
                        <div
                            className="columns--two"
                            dangerouslySetInnerHTML={{
                                __html: nightclubs_section_data.career_highlights,
                            }}
                        ></div>
                    </SectionWrapper>
                </SectionWrapper>
                <SectionWrapper gap={100} id="weddings_private_events">
                    <section
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "50px",
                        }}
                    >
                        <SectionHeader title={weddings_title} showSVG={true} />
                        <div className="content__wrapper">
                            <p>{weddings_description}</p>
                            <Image
                                src={
                                    weddings_banner.provider === "local"
                                        ? `http://127.0.0.1:1338${weddings_banner.url}`
                                        : `${weddings_banner.url}`
                                }
                                alt={weddings_banner.alternativeText}
                                width={1280}
                                height={650}
                                className="section__banner"
                            />
                        </div>
                    </section>
                    <SectionWrapper gap={50}>
                        <SectionHeader
                            title={audio_title}
                            size="smaller"
                            showSVG={false}
                        />
                        <div
                            className="content__wrapper"
                            dangerouslySetInnerHTML={{
                                __html: audio_description,
                            }}
                        ></div>
                    </SectionWrapper>
                    <SectionWrapper gap={50}>
                        <SectionHeader
                            title={photobooth_title}
                            size="smaller"
                            showSVG={false}
                        />
                        <div
                            className="content__wrapper"
                            dangerouslySetInnerHTML={{
                                __html: photobooth_description,
                            }}
                        ></div>
                    </SectionWrapper>
                </SectionWrapper>
                <SectionWrapper gap={50}>
                    <SectionHeader title="TESTIMONIALS" showSVG={true} />
                    <div className="content__wrapper">
                        {testimonials_data.length > 0 ? (
                            <div className="testimonials">
                                {testimonials_data.map(
                                    (testimonial: any, index: number) => (
                                        <Testimonial
                                            key={index}
                                            name={testimonial.name}
                                            service="Wedding"
                                            description={testimonial.details}
                                        />
                                    )
                                )}
                            </div>
                        ) : (
                            <p>no testimonials, please check back later</p>
                        )}
                    </div>
                </SectionWrapper>
            </article>
            <BookNow />
        </MainWrapper>
    );
}
