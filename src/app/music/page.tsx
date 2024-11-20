/* eslint-disable @next/next/no-img-element */

import MainWrapper from "@/app/(ui)/wrappers/MainWrapper";
import PageContent from "@/app/music/PageContent";

export default function Music() {
    // this page is simply where we request the data and then pass it down
    // not ideal, but I'd rather not write a client fetch

    return (
        <MainWrapper>
            <PageContent />
        </MainWrapper>
    );
}
