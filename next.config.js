/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
    images: {
        domains: ["dacc.unir.br"],
    },
    env: {
        DATABASE_URL: process.env.DATABASE_CONNECTION,
    },
};

module.exports = nextConfig;
