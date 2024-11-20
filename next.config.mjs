/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hundred.talkswebdevelopment.com',
                port: '',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1338',
                pathname: '/*'
            },
            {
                protocol: 'http',
                hostname: "127.0.0.1",
                port: '1338'
            },
        ]
    }
};

export default nextConfig;
