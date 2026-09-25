import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './AccordionGallery.css';

export interface GalleryItem {
  image: string;
  label: string;
  link?: string;
  alt?: string;
}

interface AccordionGalleryProps {
  items: GalleryItem[];
}

const AccordionGallery = ({ items }: AccordionGalleryProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const panels = panelRefs.current.filter(Boolean) as HTMLAnchorElement[];
    if (!panels.length) return;
    gsap.to(panels, { flexGrow: 1, rotateY: -5, duration: 0.6, ease: 'power3.out' });
    gsap.to(panels[active], { flexGrow: 3.5, rotateY: 0, duration: 0.6, ease: 'power3.out' });
  }, [active]);

  return (
    <div ref={rootRef} className="accordion-gallery" role="list" aria-label="Project gallery">
      {items.map((item, index) => (
        <a
          key={item.label}
          ref={(element) => { panelRefs.current[index] = element; }}
          className={`ag-panel${active === index ? ' ag-panel--active' : ''}`}
          href={item.link || '#projects'}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={(event) => { if (!item.link) event.preventDefault(); }}
          role="listitem"
          aria-label={item.label}
        >
          <img src={item.image} alt={item.alt || item.label} className="ag-panel__image" />
          <span className="ag-panel__shade" />
          <span className="ag-panel__label">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default AccordionGallery;