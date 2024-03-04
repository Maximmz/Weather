/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
              protocol: "http", 
              hostname: "openweathermap.org",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            }
          ],
    }
}
