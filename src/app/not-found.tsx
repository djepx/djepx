import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";

export default function NotFound() {
    return (
        <MainWrapper>
            <article>
                <SectionWrapper gap={50}>
                    <SectionHeader title="404" showSVG={true} />
                    <div className="content__wrapper">
                        <p style={{ textAlign: "center" }}>
                            Whoops, the page you&apos;re looking for isn&apos;t
                            here.
                        </p>
                    </div>
                </SectionWrapper>
            </article>
        </MainWrapper>
    );
}
