const tooltipMarkup = `import Link from 'next/link';

<figure className="itooltip hover-scale rounded" title="Some Title Quam Sit Ornare">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
</figure>
`;

const overlayMarkup = `import Link from 'next/link';

<figure className="overlay overlay-1 hover-scale rounded">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
  <figcaption>
    <h5 className="from-top mb-0">Some Title</h5>
  </figcaption>
</figure>

<figure className="overlay overlay-2 hover-scale color rounded">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
  <figcaption>
    <h5 className="from-top mb-1">Some Title</h5>
    <p className="from-bottom">Some Description</p>
  </figcaption>
</figure>

<figure className="overlay overlay-3 overlay-gradient-1 hover-scale rounded">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
  <figcaption>
    <h5 className="from-left mb-1">Some Title</h5>
    <p className="from-left mb-0">Some Description</p>
  </figcaption>
</figure>

<figure className="overlay overlay-3 overlay-gradient-2 hover-scale rounded">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
  <figcaption>
    <h5 className="from-left mb-1">Some Title</h5>
    <p className="from-left mb-0">Some Description</p>
  </figcaption>
</figure>

<figure className="overlay overlay-3 overlay-gradient-3 hover-scale rounded">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
  <figcaption>
    <h5 className="from-left mb-1">Some Title</h5>
    <p className="from-left mb-0">Some Description</p>
  </figcaption>
</figure>

<figure className="overlay overlay-3 overlay-gradient-4 hover-scale rounded">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
  <figcaption>
    <h5 className="from-left mb-1">Some Title</h5>
    <p className="from-left mb-0">Some Description</p>
  </figcaption>
</figure>

<figure className="overlay overlay-3 overlay-gradient-5 hover-scale rounded">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
  <figcaption>
    <h5 className="from-left mb-1">Some Title</h5>
    <p className="from-left mb-0">Some Description</p>
  </figcaption>
</figure>

<figure className="overlay overlay-3 overlay-gradient-6 hover-scale rounded">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
  <figcaption>
    <h5 className="from-left mb-1">Some Title</h5>
    <p className="from-left mb-0">Some Description</p>
  </figcaption>
</figure>

<figure className="overlay overlay-3 overlay-gradient-7 hover-scale rounded">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
  <figcaption>
    <h5 className="from-left mb-1">Some Title</h5>
    <p className="from-left mb-0">Some Description</p>
  </figcaption>
</figure>
`;

const simpleMarkup = `import Link from 'next/link';

<figure className="lift rounded">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
</figure>

<figure className="hover-scale rounded">
  <Link href="#">
    <a>
      <img src="..." srcSet="...@2x.jpg 2x" alt="" />
    </a>
  </Link>
</figure>
`;

const cursorMarkup = `import Link from 'next/link';

<figure className="hover-scale cursor-dark rounded">
 <Link href="#">
   <a>
     <img src="..." srcSet="...@2x.jpg 2x" alt="" />
   </a>
 </Link>
</figure>

<figure className="hover-scale cursor-light rounded">
 <Link href="#">
   <a>
     <img src="..." srcSet="...@2x.jpg 2x" alt="" />
   </a>
 </Link>
</figure>

<figure className="hover-scale cursor-primary rounded">
 <Link href="#">
   <a>
     <img src="..." srcSet="...@2x.jpg 2x" alt="" />
   </a>
 </Link>
</figure>
`;

export { tooltipMarkup, overlayMarkup, simpleMarkup, cursorMarkup };
