import { useEffect, useMemo, useState } from 'react'
import { Card } from 'react-bootstrap'
import LocationGallery from '../components/LocationGallery'
import LocationSelector from '../components/LocationSelector'
import RegionSelector from '../components/RegionSelector'
import SectionHeader from '../components/SectionHeader'
import { mapData } from '../data/siteData'

export default function JourneyPage() {
  const [activeRegion, setActiveRegion] = useState('India')
  const [activeLocation, setActiveLocation] = useState('Delhi')

  const selectedRegion = mapData[activeRegion]
  const locationNames = useMemo(() => Object.keys(selectedRegion.locations), [selectedRegion])

  useEffect(() => {
    if (!locationNames.includes(activeLocation)) {
      setActiveLocation(locationNames[0])
    }
  }, [activeRegion, activeLocation, locationNames])

  const selectedLocation =
    selectedRegion.locations[activeLocation] ?? selectedRegion.locations[locationNames[0]]

  const displayedLocationName =
    selectedRegion.locations[activeLocation] ? activeLocation : locationNames[0]

  return (
    <>
      <section className="mb-5">
        <SectionHeader
          eyebrow="Interactive Storytelling"
          title="Map of My Life"
          description="Start by choosing a country, then click into the specific places that have shaped my life. Each location opens real photos and a short story from that chapter."
        />
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
            activeLocation={displayedLocationName}
            onSelectLocation={setActiveLocation}
          />
        </Card.Body>
      </Card>

      {selectedLocation && (
        <LocationGallery
          activeRegion={activeRegion}
          locationName={displayedLocationName}
          locationData={selectedLocation}
        />
      )}
    </>
  )
}