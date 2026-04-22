import { Button } from 'react-bootstrap'

export default function LocationSelector({ locations, activeLocation, onSelectLocation }) {
  return (
    <div className="location-selector">
      {locations.map((location) => (
        <Button
          key={location}
          variant={activeLocation === location ? 'dark' : 'outline-dark'}
          onClick={() => onSelectLocation(location)}
        >
          {location}
        </Button>
      ))}
    </div>
  )
}