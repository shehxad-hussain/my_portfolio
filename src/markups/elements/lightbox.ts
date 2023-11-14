const imageMarkup = `<a href="#" data-glightbox data-gallery="g1">
  Link
</a>

<a href="#" data-glightbox="title: Title; description: Description" data-gallery="g1">
  Link
</a>

<a href="#" data-glightbox="title: Title; description: .caption1" data-gallery="g1">
  Link
</a>
<div className="glightbox-desc caption1">
  <p className="mb-0">This div will be used as the image description. HTML is supported.</p>
</div>
`;

const videoMarkup = `
<a href="Vimeo Link" data-glightbox data-gallery="g2">Link</a>
<a href="YouTube Link" data-glightbox data-gallery="g2">Link</a>
<a href=".mp4 Link" data-glightbox data-gallery="g2">Link</a>
`;

export { imageMarkup, videoMarkup };
