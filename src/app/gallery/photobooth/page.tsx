/* eslint-disable @typescript-eslint/no-explicit-any */
import Strapi from "@/app/api/cms/strapi";

import GalleryItem from "@/app/(ui)/gallery/GalleryItem";
import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";
import GalleryWrapper from "@/app/(ui)/wrappers/GalleryWrapper";

export default async function Weddings() {
    const photobooth_raw = await Strapi.getPhotoboothGalleries();
    return (
        <MainWrapper>
            <article>
                <SectionWrapper gap={50}>
                    <SectionHeader title="PHOTOBOOTH GALLERY" showSVG={true} />
                    <a href="/gallery" className="btn">
                        view our general gallery
                    </a>
                    <GalleryWrapper gap={50} type="photobooth">
                        {photobooth_raw.data.length > 0 ? (
                            photobooth_raw.data.map(
                                (item: any, index: number) => (
                                    <GalleryItem
                                        key={index}
                                        name={item.gallery_name}
                                        date={item.gallery_date}
                                        link_path={item.gallery_path}
                                        img_object={item.gallery_banner}
                                    />
                                )
                            )
                        ) : (
                            <p>no galleries available</p>
                        )}
                        {/*<GalleryItem name="Brandon & Vivian's Wedding" date="2024-05-01" link_path="brandon_vivian" />
                        <GalleryItem name="David & Lily's Wedding" date="2024-05-01" link_path="david_lily" />
                        <GalleryItem name="Andy & Christy's Wedding" date="2024-05-01" link_path="andy_christy" />
                        <GalleryItem name="Andrew & Grace's Wedding" date="2024-05-01" link_path="andrew_grace" />
                        <GalleryItem name="Sean & Michelle's Wedding" date="2024-05-01" link_path="sean_michelle" />
                        <GalleryItem name="Piro & Nim's Wedding" date="2024-05-01" link_path="piro_nim" />
                        <GalleryItem name="Steve & Christine's Wedding" date="2024-05-01" link_path="steve_christine" />*/}
                    </GalleryWrapper>
                </SectionWrapper>
            </article>
        </MainWrapper>
    );
}
