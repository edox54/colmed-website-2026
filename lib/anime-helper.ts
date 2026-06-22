/* Utility to get anime.js from CDN global */
export function getAnime(): any | null {
  if (typeof window !== 'undefined' && (window as any).anime) {
    return (window as any).anime;
  }
  return null;
}

export async function waitForAnime(timeout = 3000): Promise<any> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('SSR'));
    if ((window as any).anime) return resolve((window as any).anime);
    const start = Date.now();
    const check = setInterval(() => {
      if ((window as any).anime) { clearInterval(check); resolve((window as any).anime); }
      else if (Date.now() - start > timeout) { clearInterval(check); reject(new Error('anime.js not loaded')); }
    }, 50);
  });
}
