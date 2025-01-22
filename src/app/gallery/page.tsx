/* eslint-disable @typescript-eslint/no-explicit-any */
import Smugmug from "@/app/api/images/smugmug";

import deleteAfterString from "@/app/(utility)/strings";

import GalleryItem from "@/app/(ui)/gallery/GalleryItem";
import SectionHeader from "@/app/(ui)/section_header/SectionHeader";
import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import SectionWrapper from "@/app/(ui)/wrappers/SectionWrapper";
import GalleryWrapper from "@/app/(ui)/wrappers/GalleryWrapper";

export default async function Gallery() {
    const smug_test = await Smugmug.getAlbums();
    const albums_raw = smug_test.Response.Album;

    const albums: any = [];
    let album_count = 0;
    for (const _album of albums_raw) {
        const featured_image = await Smugmug.getAlbumFeaturedImage(
            _album.Uris.AlbumHighlightImage.Uri
        );

        // to avoid another network call, rework the URL for cover images
        // NOTE: this obviously leads to potential failure if they change URL structure
        const featuredImage = featured_image.Response.AlbumImage;
        const featuredName = featuredImage.FileName;
        const featuredURL = featuredImage.ThumbnailUrl;
        let preview_image = deleteAfterString(featuredURL, "/Th/");
        preview_image = preview_image.replace("/Th/", "/X3/");
        preview_image = preview_image + featuredName + "-X3.jpg";

        albums[album_count] = {};
        albums[album_count].featured_image = preview_image;
        albums[album_count].album_details = _album;
        albums[album_count].category = _album.Keywords;

        album_count++;
    }

    const general_albums = albums.filter(
        (album: any) => album.category === "general"
    );
    const photobooth_albums = albums.filter(
        (album: any) => album.category != "general"
    );

    return (
        <MainWrapper>
            <article>
                <SectionWrapper gap={50}>
                    <SectionHeader title="GALLERY" showSVG={true} />
                    <div className="gallery__divider">
                        <h2 className="gallery__title">
                            Nightclubs & Festivals
                        </h2>
                        <GalleryWrapper gap={50} type="photobooth">
                            {general_albums.length > 0 ? (
                                general_albums.map(
                                    (album: any, index: number) => (
                                        <GalleryItem
                                            interior={false}
                                            key={index}
                                            name={album.album_details.Title}
                                            date={
                                                album.album_details.LastUpdated
                                            }
                                            link_path={
                                                album.album_details.AlbumKey
                                            }
                                            img_object={album.featured_image}
                                            count={
                                                album.album_details.ImageCount
                                            }
                                        />
                                    )
                                )
                            ) : (
                                <p>no galleries available</p>
                            )}
                        </GalleryWrapper>
                    </div>
                    <div className="gallery__divider">
                        <h2 className="gallery__title">Photobooth</h2>
                        <GalleryWrapper gap={50} type="photobooth">
                            {photobooth_albums.length > 0 ? (
                                photobooth_albums.map(
                                    (album: any, index: number) => (
                                        <GalleryItem
                                            interior={false}
                                            key={index}
                                            name={album.album_details.Title}
                                            date={
                                                album.album_details.LastUpdated
                                            }
                                            link_path={
                                                album.album_details.AlbumKey
                                            }
                                            img_object={album.featured_image}
                                            count={
                                                album.album_details.ImageCount
                                            }
                                        />
                                    )
                                )
                            ) : (
                                <p>no galleries available</p>
                            )}
                        </GalleryWrapper>
                    </div>
                </SectionWrapper>
            </article>
        </MainWrapper>
    );
}
