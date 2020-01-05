import { Orientation } from 'projects/gallery/src/lib/core/orientation';

export interface GalleryDetailConfig {
  // TODO should the overlay and gallery config be split?
  // overlay config
  hasBackdrop?: boolean;
  panelClass?: string | string[];
  documentScroll?: boolean;
  // gallery config
  thumbsOrientation?: Orientation;
  thumbsScroll?: boolean;
  thumbsArrows?: boolean;
  thumbsArrowSlideTime?: number;
  thumbsArrowSlideByLength?: number;
}
