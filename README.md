# My first dental visit

A responsive React + TypeScript site based on the Dentist Paper mockups and the My First Dental Visit research.

## Run locally

```sh
bun install
bun run dev
```

`npm install` and `npm run dev` also work.

## Check and build

```sh
npm run lint
npm run build
```

## Included

- Welcome page with the original clinic SVG and alternating car animations.
- Eight-step visual story, a step index and optional sensory details.
- Parent/carer guide, printable story and blank preparation sheet.
- Keyboard navigation, reduced-motion support and an animation pause control.
- Hash navigation so story links work without server routing configuration.

The car sequence has a 16-second slot: four seconds arriving, three seconds still, four seconds leaving, then five seconds quiet. A second car travels in the other direction in the next slot. Only the welcome illustration animates.

## Content and assets

Edit `src/story.ts` for story text and sensory details. Illustrations are in `src/components/Illustration.tsx`; layout and motion styles are in `src/App.css`. The design uses Nunito Sans from Google Fonts with a system-font fallback.

The story uses the supplied clinic photographs in `public/images/`. The welcome animation and the team/pause drawings remain illustrations. The chair step lets readers switch between a chair photograph and a closer look at the equipment. Confirm the visit sequence, available support and wording with the intended dental team before publication.

Paper design: https://app.paper.design/file/01M5PRJMVFHRCW2BKE8QKCF7QY
