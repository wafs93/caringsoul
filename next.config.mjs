/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes plain HTML/CSS/JS to /out.
  // Vercel serves it as-is, and the same /out folder uploads straight to Webfort (cPanel public_html).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
