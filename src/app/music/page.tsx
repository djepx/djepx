/* eslint-disable @typescript-eslint/no-explicit-any */
import Strapi from "@/app/api/cms/strapi";

import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import PageContent from "@/app/music/PageContent";

export default async function Music() {
    // this page is simply where we request the data and then pass it down
    // not ideal, but I'd rather not write a client fetch
    const music_raw = await Strapi.getMusic();
    const song_list = music_raw.data.length > 0 ? music_raw.data : [];

    // this seems silly, but it makes everything easier
    // the index is used to map out the entire song list for the media player regardless of where it is displayed
    song_list.map((song: any, index: number) => {
        song_list[index].index = index;
    });

    return (
        <MainWrapper>
            <PageContent songs={song_list} />
        </MainWrapper>
    );
}
