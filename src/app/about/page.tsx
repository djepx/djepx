/* eslint-disable @typescript-eslint/no-explicit-any */
import Strapi from "@/app/api/cms/strapi";

import Image from "next/image";

import BookNow from "@/app/(ui)/book_now/BookNow";
import Member from "@/app/(ui)/team/Member";
import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";

export default async function About() {
    const about_page_raw = await Strapi.getPage("about");
    const about_page_data = about_page_raw.data;
    const about_title = about_page_data.page_title.toUpperCase();
    const about_description = about_page_data.page_description;
    const about_banner = about_page_data.page_banner;

    const edwin_raw = await Strapi.getPage("edwin");
    const edwin_data = edwin_raw.data;
    const team_raw = await Strapi.getTeams();
    const team_data = team_raw.data;

    return (
        <MainWrapper>
            <article>
                <SectionWrapper gap={50}>
                    <SectionHeader title={about_title} showSVG={true} />
                    <div className="content__wrapper">
                        <p>{about_description}</p>
                        <Image
                            src={
                                about_banner.provider === "local"
                                    ? `http://127.0.0.1:1338${about_banner.url}`
                                    : `${about_banner.url}`
                            }
                            alt={about_banner.alternativeText}
                            width={1280}
                            height={650}
                            className="section__banner"
                        />
                    </div>
                </SectionWrapper>
                <SectionWrapper gap={100}>
                    <SectionHeader title="MEET THE TEAM" showSVG={true} />
                    <div className="team__wrapper">
                        <Member
                            featured={true}
                            name={edwin_data.name}
                            headshot={
                                edwin_data.headshot.provider === "local"
                                    ? `http://127.0.0.1:1338${edwin_data.headshot.url}`
                                    : `${edwin_data.headshot.url}`
                            }
                            bio={edwin_data.biography}
                        />
                        {team_data.length > 0 ? (
                            <>
                                <SectionHeader
                                    title="EXTENDED ROSTER"
                                    size="smaller"
                                    showSVG={true}
                                />
                                <div className="split">
                                    {team_data.map(
                                        (member: any, index: number) => (
                                            <Member
                                                key={index}
                                                featured={member.featured}
                                                name={member.name}
                                                headshot={
                                                    member.headshot.provider ===
                                                    "local"
                                                        ? `http://127.0.0.1:1338${member.headshot.url}`
                                                        : `${member.headshot.url}`
                                                }
                                                bio={member.biography}
                                            />
                                        )
                                    )}
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </SectionWrapper>
            </article>
            <BookNow />
        </MainWrapper>
    );
}
