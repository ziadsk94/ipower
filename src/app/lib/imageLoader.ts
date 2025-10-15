export default function imageLoader({ src }: {
  src: string;
  width?: number;
  quality?: number;
}) {
  // For static export, return the original src
  // Cloudflare Pages will handle optimization
  return src;
}
