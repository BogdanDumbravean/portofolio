import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  /**
   * Preload an image and return a promise that resolves when loaded
   */
  preloadImage(src: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    });
  }

  /**
   * Check if an image exists and is loadable
   */
  async checkImage(src: string): Promise<boolean> {
    try {
      await this.preloadImage(src);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get a fallback image with multiple options
   */
  getFallbackImages(): string[] {
    return [
      'assets/img/favicon.png',
      'assets/img/Bogdan.webp',
      'assets/img/triangle-mosaic.png',
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjlmOWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
    ];
  }

  /**
   * Handle image error with progressive fallbacks
   */
  handleImageError(event: any): void {
    console.log('Image failed to load:', event.target.src);
    const fallbackImages = this.getFallbackImages();

    // Try the first fallback image if it's not already being used
    if (!event.target.hasAttribute('data-fallback-tried')) {
      event.target.setAttribute('data-fallback-tried', 'true');
      event.target.src = fallbackImages[0];
    } else if (!event.target.hasAttribute('data-fallback-tried-2')) {
      event.target.setAttribute('data-fallback-tried-2', 'true');
      event.target.src = fallbackImages[1];
    } else {
      // Use SVG placeholder as last resort
      event.target.src = fallbackImages[2];
    }
  }
}
