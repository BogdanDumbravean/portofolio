import { Component, OnInit } from '@angular/core';
import { GAMES, PROGRAMMING } from 'src/app/project.list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {  programming;
  games;

  constructor() { 
    this.programming = PROGRAMMING.slice(0, 3);
    this.games = GAMES.slice(0, 3);
  }

  ngOnInit(): void {
  }  onImageError(event: any): void {
    console.log('Image failed to load:', event.target.src);
    // Try different fallback images in order of preference
    const fallbackImages = [
      'assets/img/favicon.png',
      'assets/img/triangle-mosaic.png',
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjlmOWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
    ];

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
