/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

import Strapi from "@/app/api/cms/strapi";

import BookNow from "@/app/(ui)/book_now/BookNow";
import Banner from "@/app/(ui)/banner/Banner";
import Image from "next/image";
import Card from "@/app/(ui)/card/Card";
import Slider from "@/app/(ui)/slider/Slider";
import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";

export default async function Home() {
    const home_raw = await Strapi.getPage("home");
    const home_data = home_raw.data;
    const home_title = home_data.page_title;
    const home_cta = home_data.page_cta;

    const current_residencies_raw = await Strapi.getCurrentResidencies();
    const current_residencies_data = current_residencies_raw.data;

    return (
        <MainWrapper page="home">
            <Banner
                title={home_title}
                cta={home_cta}
                img_path={home_data.page_banner.url}
            />
            <Slider />
            <article className="article--home">
                <SectionWrapper gap={100}>
                    <SectionHeader title="SERVICES" showSVG={true} />
                    <div className="services">
                        <div className="service">
                            <Image
                                src={
                                    home_data.nightclubs_banner.provider ===
                                    "local"
                                        ? `http://127.0.0.1:1338${home_data.nightclubs_banner.url}`
                                        : `${home_data.nightclubs_banner.url}`
                                }
                                alt="DJ EPX's performing at a nightclub"
                                width="1920"
                                height="1280"
                            />
                            <div className="service__details">
                                <h2>NIGHTCLUBS & FESTIVALS</h2>
                                <p>{home_data.nightclubs_description}</p>
                                <Link
                                    href="/services#nightclubs_festivals"
                                    className="btn--standard"
                                >
                                    Learn More{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96c13.3 0 24 10.7 24 24l0 240c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-182.1L73 409c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l231-231L88 144c-13.3 0-24-10.7-24-24s10.7-24 24-24l240 0z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="service">
                            <Image
                                src={
                                    home_data.weddings_banner.provider ===
                                    "local"
                                        ? `http://127.0.0.1:1338${home_data.weddings_banner.url}`
                                        : `${home_data.weddings_banner.url}`
                                }
                                alt="DJ EPX's with the bride and groom at a wedding"
                                width="1920"
                                height="1440"
                            />
                            <div className="service__details">
                                <h2>WEDDINGS & PRIVATE EVENTS</h2>
                                <p>{home_data.weddings_description}</p>
                                <Link
                                    href="/services#weddings_private_events"
                                    className="btn--standard"
                                >
                                    Learn More{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96c13.3 0 24 10.7 24 24l0 240c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-182.1L73 409c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l231-231L88 144c-13.3 0-24-10.7-24-24s10.7-24 24-24l240 0z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
                <SectionWrapper gap={100}>
                    <SectionHeader title="CURRENT RESIDENCIES" showSVG={true} />
                    {current_residencies_data.length > 0 ? (
                        <div className="cards">
                            {current_residencies_data.map(
                                (venue: any, index: number) => (
                                    <Card
                                        key={index}
                                        club_name={venue.name}
                                        location={venue.location}
                                        background_path={
                                            venue.background_image.provider ===
                                            "local"
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
                {/*<section style={{gap: "50px"}}>
                <SectionHeader title="SAMPLES" />
            </section>*/}
            </article>
            <BookNow />
        </MainWrapper>
    );
}
