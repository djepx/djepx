/* eslint-disable @typescript-eslint/no-explicit-any */
import Strapi from "@/app/api/cms/strapi";

import GalleryItem from "@/app/(ui)/gallery/GalleryItem";
import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";
import GalleryWrapper from "@/app/(ui)/wrappers/GalleryWrapper";

export default async function Gallery() {
    const gallery_raw = await Strapi.getGeneralGallery();

    return (
        <MainWrapper>
            <article>
                <SectionWrapper gap={50}>
                    <SectionHeader title="GALLERY" showSVG={true} />
                    <a href="/gallery/photobooth" className="btn">
                        view our photobooth gallery
                    </a>
                    <div className="content__wrapper">
                        <GalleryWrapper gap={25} type="general">
                            {gallery_raw.data.length > 0 ? (
                                gallery_raw.data.map(
                                    (item: any, index: number) => (
                                        <GalleryItem
                                            key={index}
                                            img_object={item.picture}
                                        />
                                    )
                                )
                            ) : (
                                <p>no images to display</p>
                            )}
                        </GalleryWrapper>
                    </div>
                </SectionWrapper>
            </article>
        </MainWrapper>
    );
}
