import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import LocationGallery from '../components/LocationGallery'
import LocationSelector from '../components/LocationSelector'
import RegionSelector from '../components/RegionSelector'
import { mapData } from '../data/siteData'

export default function JourneyPage() {
  const [activeRegion, setActiveRegion] = useState('India')
  const [activeLocation, setActiveLocation] = useState('Delhi')

  const selectedRegion = mapData[activeRegion]
  const locationNames = Object.keys(selectedRegion.locations)
  const selectedLocation = selectedRegion.locations[activeLocation]

  useEffect(() => {
    setActiveLocation(Object.keys(mapData[activeRegion].locations)[0])
  }, [activeRegion])

  return (
    <>
      <section className="mb-5">
        <p className="eyebrow">Interactive Storytelling</p>
        <h1>Map of My Life</h1>
        <p className="page-copy">
          Start by choosing a country, then click into the specific places that have shaped
          my life. Each location opens real photos and a short story from that chapter.
        </p>
      </section>

      <RegionSelector
        mapData={mapData}
        activeRegion={activeRegion}
        onSelectRegion={setActiveRegion}
      />

      <Card className="border-0 shadow-sm mt-4">
        <Card.Body className="p-4">
          <h2 className="mb-2">{activeRegion}</h2>
          <p className="text-secondary mb-0">{selectedRegion.summary}</p>

          <LocationSelector
            locations={locationNames}
            activeLocation={activeLocation}
            onSelectLocation={setActiveLocation}
          />
        </Card.Body>
      </Card>

      <LocationGallery
        activeRegion={activeRegion}
        locationName={activeLocation}
        locationData={selectedLocation}
      />
    </>
  )
}