import type { ImageMetadata } from 'astro';

interface ImageOptions {
  src: ImageMetadata;
  alt: string;
  width: number;
  height: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'png' | 'jpg';
}

export const optimizeImage = ({
  src,
  alt,
  width,
  height,
  quality = 75,
  format = 'webp'
}: ImageOptions) => ({
  src,
  alt,
  width,
  height,
  quality,
  format,
  loading: width > 400 ? 'lazy' : 'eager',
  decoding: width > 400 ? 'async' : 'sync'
}); 