import marker from "../assets/marker.png";

function Entry(props) {
  return (
    <article>
      <img src={props.entry.img.src} alt={props.entry.img.alt} className="entry-image" />
      <div className="entry-details">
        <div className="location">
          <img src={marker} className="marker" alt="Location marker" />
          <p>{props.entry.country.toUpperCase()}</p>
          <a
            href={props.entry.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2>{props.entry.title}</h2>
        <div className="date">{props.entry.dates}</div>
        <p className="description">{props.entry.text}</p>
      </div>
    </article>
  );
}

export default Entry;
