# Music Score Follower

An interactive score-following prototype for Pachelbel's *Canon in D* and the nine canonic variations from Bach's *Goldberg Variations*. The score, playback cursor, vertically aligned note highlighting, note stepping, performance audio, formal navigation, and guided annotations stay synchronized during playback.

## Development

```bash
npm install
npm run dev
```

Open the URL printed by Vite.

## Build

```bash
npm run build
```

## Blog integration

The blog bundles this app at `/apps/canon/`. Run `npm run canon:sync` in the sibling `blog` project after changing this source. The script builds with `--base=/apps/canon/` and copies the result into the blog; ordinary standalone development still uses `/`.

Use `?embed=1` for compact article embedding with same-origin height messages. `?work=goldberg&variation=12` starts on Goldberg Variation 12; supported variations are 3, 6, 9, 12, 15, 18, 21, 24 and 27. These links select the initial work without starting playback.

## Included sources

- MusicXML and MIDI score data for Pachelbel's *Canon in D*
- Kevin MacLeod's 2006 recording, licensed under CC BY 4.0
- Open Goldberg Variations score-derived data and Kimiko Ishizaka's 2012 recording, released under CC0
- Repeat-aware score-to-recording alignment data from [The Canon Machine](https://canon.ppr3.com/)
- Instrument icon attribution in `public/icons/instruments/LICENSE.md`

## Regenerating the Goldberg MusicXML files

The generated MusicXML assets are committed under `public/music/goldberg-canons/scores`. To regenerate them:

```bash
python3 -m venv .venv-goldberg
.venv-goldberg/bin/pip install -r scripts/requirements-goldberg.txt
.venv-goldberg/bin/python scripts/generate_goldberg_scores.py
```
