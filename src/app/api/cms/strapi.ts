const key = process.env.API_KEY_PROD;
const apiURL = process.env.API_URL_PROD;

async function getPage(page: string) {
    const response = await fetch(`${apiURL}/${page}?populate=*`, {
        method: "GET",
        next: {
            revalidate: 3600,
        },
        headers: {
            Authorization: "Bearer " + key,
        },
    });

    if (!response.ok) {
        return null;
    }

    return response.json();
}

async function getCurrentResidencies() {
    const response = await fetch(`${apiURL}/current-residencies/?populate=*`, {
        method: "GET",
        next: {
            revalidate: 3600,
        },
        headers: {
            Authorization: "Bearer " + key,
        },
    });

    if (!response.ok) {
        return response.json();
    }

    return response.json();
}

async function getTestimonials() {
    const response = await fetch(`${apiURL}/testimonials/?populate=*`, {
        method: "GET",
        next: {
            revalidate: 3600,
        },
        headers: {
            Authorization: "Bearer " + key,
        },
    });

    if (!response.ok) {
        return response.json();
    }

    return response.json();
}

async function getGeneralGallery() {
    const response = await fetch(`${apiURL}/general-galleries/?populate=*`, {
        method: "GET",
        next: {
            revalidate: 3600,
        },
        headers: {
            Authorization: "Bearer " + key,
        },
    });

    if (!response.ok) {
        return response.json();
    }

    return response.json();
}

async function getPhotoboothGalleries() {
    const response = await fetch(`${apiURL}/photobooth-galleries/?populate=*`, {
        method: "GET",
        next: {
            revalidate: 3600,
        },
        headers: {
            Authorization: "Bearer " + key,
        },
    });

    if (!response.ok) {
        return response.json();
    }

    return response.json();
}

async function getPhotoboothGallery(path: string) {
    const response = await fetch(
        `${apiURL}/photobooth-galleries?filters[gallery_path][$eq]=${path}&populate=*`,
        {
            method: "GET",
            next: {
                revalidate: 3600,
            },
            headers: {
                Authorization: "Bearer " + key,
            },
        }
    );

    if (!response.ok) {
        return response.json();
    }

    return response.json();
}

async function getTeams() {
    const response = await fetch(`${apiURL}/teams/?populate=*`, {
        method: "GET",
        next: {
            revalidate: 3600,
        },
        headers: {
            Authorization: "Bearer " + key,
        },
    });

    if (!response.ok) {
        return response.json();
    }

    return response.json();
}

async function getImage(id: string) {
    const response = await fetch(`${apiURL}/upload/files/${id}`, {
        method: "GET",
        next: {
            revalidate: 3600,
        },
        headers: {
            Authorization: "Bearer " + key,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch data!");
    }

    return response.json();
}

const Strapi = {
    getPage,
    getCurrentResidencies,
    getTestimonials,
    getGeneralGallery,
    getPhotoboothGalleries,
    getPhotoboothGallery,
    getTeams,
    getImage,
};

export default Strapi;
