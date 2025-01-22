const key = process.env.SMUGMUG_API_KEY;

async function getAlbums() {
    const response = await fetch(
        `https://www.smugmug.com/api/v2/user/edwinpark!albums?APIKey=${key}`,
        {
            method: "GET",
            next: {
                revalidate: 3600,
            },
            headers: {
                Accept: "application/json",
            },
        }
    );

    if (!response.ok) {
        return response.json();
    }

    return response.json();
}

async function getAlbum(album_id: string) {
    const response = await fetch(
        `https://www.smugmug.com/api/v2/album/${album_id}?APIKey=${key}`,
        {
            method: "GET",
            next: {
                revalidate: 3600,
            },
            headers: {
                Accept: "application/json",
            },
        }
    );

    if (!response.ok) {
        return response.json();
    }

    return response.json();
}

async function getAlbumImages(id: string, start: number, count: number) {
    const response = await fetch(
        `https://www.smugmug.com/api/v2/album/${id}!images?APIKey=${key}&start=${start}&count=${count}`,
        {
            method: "GET",
            next: {
                revalidate: 3600,
            },
            headers: {
                Accept: "application/json",
            },
        }
    );

    if (!response.ok) {
        return response.json();
    }

    return response.json();
}

async function getAlbumFeaturedImage(uri: string) {
    const response = await fetch(
        `https://www.smugmug.com${uri}?APIKey=${key}`,
        {
            method: "GET",
            next: {
                revalidate: 3600,
            },
            headers: {
                Accept: "application/json",
            },
        }
    );

    if (!response.ok) {
        return response.json();
    }

    return response.json();
}

const Smugmug = {
    getAlbums,
    getAlbum,
    getAlbumImages,
    getAlbumFeaturedImage,
};

export default Smugmug;
