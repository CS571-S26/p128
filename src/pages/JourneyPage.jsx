import { useState } from 'react'
import { Card } from 'react-bootstrap'
import RegionSelector from '../components/RegionSelector'
import LocationGallery from '../components/LocationGallery'
import { mapData } from '../data/siteData'

export default function JourneyPage() {
  const [activeRegion, setActiveRegion] = useState('India')
  const selectedRegion = mapData[activeRegion]

  return (
    <>
      <section className="mb-5">
        <p className="eyebrow">Interactive Storytelling</p>
        <h1>Map of My Life</h1>
        <p className="page-copy">
          Start by choosing a country or region. Each section opens the places and
          stories that have shaped my journey.
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
        </Card.Body>
      </Card>

      <LocationGallery locations={selectedRegion.locations} />
    </>
  )
}