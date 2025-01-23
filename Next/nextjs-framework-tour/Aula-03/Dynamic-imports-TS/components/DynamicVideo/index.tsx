export default function YouTubeVideo() {
  return (
    <div>
      <h1>Video</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/W1dRBWyf6z8?si=cEOe55RGEbo78vDa"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </div>
  );
}
