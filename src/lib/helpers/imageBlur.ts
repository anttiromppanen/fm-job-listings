"use server";

import sharp from "sharp";

function bufferToBase64(buffer: Buffer): string {
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

async function getFileBufferRemote(url: string) {
  const response = await fetch(url);
  return Buffer.from(await response.arrayBuffer());
}

async function getPlaceholderImage(filepath: string) {
  try {
    const originalBuffer = await getFileBufferRemote(filepath);

    // Resize the image to 20x20, apply a circular mask, and then blur
    const resizedBuffer = await sharp(originalBuffer)
      .resize(30, 30) // Resize to a square 20x20
      .blur(5) // Apply blur after the mask
      .png() // Ensure output is PNG to support transparency
      .toBuffer();

    return {
      src: filepath,
      placeholder: bufferToBase64(resizedBuffer),
    };
  } catch {
    return {
      src: filepath,
    };
  }
}

export default getPlaceholderImage;
