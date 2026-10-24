import { useState } from 'react'
import type { Scene } from '../story'
import { Illustration } from './Illustration'

type StoryPhoto = {
  filename: string
  label: string
  alt: string
  caption: string
  width: number
  height: number
}

const photos: Partial<Record<Scene, StoryPhoto[]>> = {
  prepare: [{ filename: 'PHOTO-2026-10-21-10-40-08.jpg', label: 'The clinic', alt: 'The outside of UiTM Dental Centre, with its name on a red wall beside the entrance.', caption: 'A look at the clinic before your visit.', width: 810, height: 1080 }],
  clinic: [{ filename: 'PHOTO-2026-10-21-10-39-57.jpg', label: 'The entrance', alt: 'The covered entrance and glass doors of the Faculty of Dentistry building.', caption: 'This is the entrance to the dental centre.', width: 810, height: 1080 }],
  waiting: [{ filename: 'PHOTO-2026-10-21-10-38-41.jpg', label: 'The waiting area', alt: 'A children’s waiting area with a sofa, small tables, books, toys and colourful wall pictures.', caption: 'A place to wait before going into the dental room.', width: 1080, height: 810 }],
  chair: [
    { filename: 'PHOTO-2026-10-21-10-37-25.jpg', label: 'The chair', alt: 'A green animal-shaped dental chair with an overhead light and equipment beside it.', caption: 'The dental chair, light and equipment.', width: 1600, height: 1066 },
    { filename: 'PHOTO-2026-10-21-10-37-26.jpg', label: 'Some tools', alt: 'A close look at dental equipment in its holder, with hoses and a small rinsing bowl behind it.', caption: 'The team can explain which tools they may use.', width: 1066, height: 1600 },
  ],
  mirror: [{ filename: 'PHOTO-2026-10-21-10-37-26 (1).jpg', label: 'In the chair', alt: 'A child sitting back in a yellow dental chair, wearing sunglasses and giving two thumbs up.', caption: 'A child sitting in the dental chair. Every visit can feel different.', width: 1066, height: 1600 }],
  finish: [{ filename: 'PHOTO-2026-10-21-11-08-30.jpg', label: 'Reception', alt: 'The reception counters and seating inside the Faculty of Dentistry building.', caption: 'Reception, where you can ask about what happens next.', width: 810, height: 1080 }],
}

export function StoryVisual({ scene }: { scene: Scene }) {
  const [selected, setSelected] = useState(0)
  const options = photos[scene]
  if (!options) return <Illustration scene={scene} />
  const photo = options[selected] ?? options[0]

  return <figure className="illustration story-photo">
    <div className="story-photo-stage"><img src={`/images/${encodeURIComponent(photo.filename)}`} alt={photo.alt} width={photo.width} height={photo.height} decoding="async" /></div>
    {options.length > 1 && <div className="photo-choices" role="group" aria-label="Explore the dental room">{options.map((option, index) => <button type="button" key={option.filename} aria-pressed={selected === index} onClick={() => setSelected(index)}>{option.label}</button>)}</div>}
    <figcaption aria-live="polite">{photo.caption}</figcaption>
  </figure>
}
