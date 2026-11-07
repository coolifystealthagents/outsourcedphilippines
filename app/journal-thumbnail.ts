const library = [8101573,5453808,7652178];
export function journalThumbnail(asset: unknown): string { const key=typeof asset === "string" ? asset : ""; if (key.includes("/daily07/")) return key; let h=0; for(const c of key) h=(Math.imul(h,31)+c.charCodeAt(0))>>>0;return "/design-photography/"+library[h%library.length]+".webp"; }
