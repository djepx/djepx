/* eslint-disable @typescript-eslint/no-explicit-any */
import Strapi from "@/app/api/cms/strapi";

import GalleryItem from "@/app/(ui)/gallery/GalleryItem";
import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import GalleryWrapper from "@/app/(ui)/wrappers/GalleryWrapper";
import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";

interface Params {
    params: {
        name: string;
    };
}

export default async function PhotoBoothInterior({ params }: Params) {
    const interior_raw = await Strapi.getPhotoboothGallery(params.name);

    return (
        <MainWrapper>
            <article>
                <SectionWrapper gap={50}>
                    <SectionHeader
                        title={interior_raw.data[0].gallery_name}
                        showSVG={true}
                    />
                    <GalleryWrapper gap={50} type="general">
                        {interior_raw.data[0].gallery.length > 0 ? (
                            interior_raw.data[0].gallery.map(
                                (item: any, index: number) => (
                                    <GalleryItem
                                        key={index}
                                        img_object={item}
                                    />
                                )
                            )
                        ) : (
                            <p>no images to display</p>
                        )}
                    </GalleryWrapper>
                </SectionWrapper>
            </article>
        </MainWrapper>
    );
}
