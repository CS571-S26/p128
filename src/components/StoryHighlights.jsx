export default function StoryHighlights({ highlights }) {
  return (
    <ul className="story-highlights">
      {highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
  )
}