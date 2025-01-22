/* eslint-disable @typescript-eslint/no-explicit-any */

import Smugmug from "@/app/api/images/smugmug";

import GalleryItem from "@/app/(ui)/gallery/GalleryItem";
import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import GalleryWrapper from "@/app/(ui)/wrappers/GalleryWrapper";
import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";
import GalleryPagination from "@/app/(ui)/pagination/GalleryPagination";

interface Params {
    id: string;
}

export default async function PhotoBoothInterior({
    params,
    searchParams,
}: {
    params: Params;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const page_param = (await searchParams).page;
    const page_number = page_param ? Number(page_param) : 1;
    const gallery_index = page_number === 1 ? 1 : (page_number - 1) * 100 + 1;
    const smug_images = await Smugmug.getAlbumImages(
        params.id,
        gallery_index,
        100
    );

    const images = smug_images.Response.AlbumImage;

    //const gallery_start = smug_images.Response.Pages.Start;
    //const gallery_requested_count = smug_images.Response.Pages.RequestedCount;
    const gallery_total = smug_images.Response.Pages.Total;

    const album = await Smugmug.getAlbum(params.id);

    return (
        <MainWrapper>
            <article>
                {
                    <SectionWrapper gap={50}>
                        <SectionHeader
                            title={album.Response.Album.Title}
                            showSVG={true}
                        />
                        <GalleryWrapper gap={50} type="general">
                            {images ? (
                                images.map((image: any, index: number) => (
                                    <GalleryItem
                                        key={index}
                                        img_object={image}
                                        interior={true}
                                    />
                                ))
                            ) : (
                                <p>no images to display</p>
                            )}
                        </GalleryWrapper>
                        <GalleryPagination
                            current={page_number}
                            start={gallery_index}
                            total={gallery_total}
                            album_id={params.id}
                        />
                    </SectionWrapper>
                }
            </article>
        </MainWrapper>
    );
}
