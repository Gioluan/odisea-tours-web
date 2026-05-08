# Sin Traducción — Photo Brief

Tour page: odisea-tours.com/tours/sin-traduccion
Use: itinerary day cards + hero (currently reusing barcelona-cathedral)

## Hero (1)
**Filename:** `sin-traduccion-hero.jpg`
**Replaces:** the current `odisea-tours-group-barcelona-cathedral.jpg` reuse
**Brief:** A small group of 6-12 high-school-aged students in candid conversation with a Spanish-speaking guide in a real Spanish setting. Outdoor, daylight, NOT posed-for-camera. Strong candidate scenes: a market stall in Madrid or Valencia, a square at golden hour, a paella cooking class. The photo should signal "language immersion" not "tourism."
**Aspect:** 16:9 horizontal (1600x900 minimum, 2400x1350 preferred for retina)
**Avoid:** stock-photo smiling-at-camera, big tour buses, anything generic-Spain (flamenco dancers, bullrings)

## Day III: Toledo
**Filename:** `it-toledo-overlook.jpg`
**Brief:** The classic Toledo skyline shot from the Mirador del Valle (the cypress-flanked overlook across the Tajo river). Gold-hour light, late afternoon. Shows the Cathedral spire, Alcázar, and the medieval walled city in one frame. Iconic, instantly recognizable as "Toledo".
**Alternate:** Puerta de Bisagra (the main gate) with students walking through, framed by the medieval arch.
**Aspect:** 4:3 horizontal

## Day IV: Valencia · Casco Antiguo
**Filename:** `it-valencia-old-town.jpg`
**Brief:** Plaza de la Virgen at midday — the fountain, the back of the Cathedral, a few people sitting in cafe terraces. Or alternately the interior of Mercado Central (the modernist iron-and-glass food market) with paella ingredients in the foreground.
**Alternate:** La Lonja de la Seda (UNESCO silk exchange) with its twisted Gothic columns.
**Aspect:** 4:3 horizontal

## Day V: Albufera & Paella — MARQUEE DAY (HIGHEST PRIORITY)
**Filename:** `it-albufera-paella.jpg`
**Brief:** Action shot of paella being cooked over an open wood fire in a wide flat pan (paella valenciana style). Hands stirring, rabbit/chicken/rice/beans visible, smoke curling up. Or alternately: students standing around the pan watching the maestro cook. Either way the **hands and the food are the subject**, not posed faces.
**Why this matters most:** This is the activity that sells the tour. If you can only commission one photo, make it this one.
**Alternate:** wide shot of the Albufera lagoon at sunset with a barca albuferenca (traditional rice-paddy boat).
**Aspect:** 4:3 or 3:2

## Day VI: Valencia → Barcelona (skip — transit day, low priority)
**Filename:** N/A
**Note:** This is a free-morning + coach transfer day. Itinerary doesn't really need a photo. Skip unless you have a great Ruzafa neighborhood shot or coastal-drive shot lying around.

## Day VII: Gaudí
**Filename:** `it-sagrada-familia-interior.jpg`
**Currently using:** `it-boqueria-market.jpg` (works for the market portion of the day, but Sagrada Família is more iconic)
**Brief:** Interior of Sagrada Família looking up at the forest-of-columns ceiling. Late morning light streaming through the colored stained glass — the famous yellow/orange/blue light spill on the columns. Vertical orientation works well for this one.
**Aspect:** 3:4 vertical preferred (or 4:3 horizontal as fallback)
**Note:** Replace `it-boqueria-market.jpg` only if the new shot is significantly stronger. Boquería is a fine fallback.

## Day IX: Departure (skip — low priority)
**Filename:** N/A
**Note:** Airport departures don't need a hero shot.

---

## Sourcing options

1. **Existing Odisea library / past trips.** Check `~/Desktop/` and the Odisea archive — paella class photos likely exist from prior tours.
2. **Stock (paid).** Adobe Stock or Getty have all of these except the paella class action shot. Budget $30-80 per image.
3. **Free stock (Unsplash / Pexels).** Workable for Toledo skyline and Sagrada Família interior. Usually weaker for Valencia old town and basically nonexistent for Albufera paella class.
4. **Commission a Valencia photographer.** For the Albufera/paella shot, this is the best path. A 2-hour session at El Palmar with the cooking partner could yield 5-10 usable shots covering Day IV (Valencia old town if extended) and Day V. Budget €150-300.

## File naming + commit

When you have the photos, drop them in `~/Desktop/odisea-tours-web/public/photos/` with the filenames above, then add the `image:` field to the matching itinerary entries in `~/Desktop/odisea-tours-web/content/tours.ts` (Sin Traducción tour, slug `sin-traduccion`, days III/IV/V/VII).

Pattern to copy from existing entries:
```ts
{
  day: "V",
  title: "Albufera & Paella",
  detail: "...",
  image: "/photos/it-albufera-paella.jpg",
},
```
