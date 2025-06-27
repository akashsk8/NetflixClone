/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    images:{
        unoptimized:true,
    },
    basePath:process.env.NODE_ENV==='production'?'/NetflixClone':'',
    assetPrefix:process.env.NODE_ENV==='production'?'/NetflixClone':'',
    eslint:{
        ignoreDuringBuilds:true
    }
};

export default nextConfig;
