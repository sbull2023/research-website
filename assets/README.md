# Assets

## Images
- `approach.png` — system architecture diagram
- `results.png`  — main results figure

## Videos — where the five clips go

```
assets/videos/
├── overview.mp4                              featured overview (poster: overview.jpg)
├── pick_place/
│   ├── chair_to_table.mp4                    bottle: office chair → table (in the lab)
│   ├── bottle_to_trashcan.mp4                bottle: found, deposited in trash can
│   └── bench_to_fountain.mp4                 bottle: hallway bench → water fountain
├── navigation/
│   └── study_room_traversal.mp4              to the far side of the study room
└── search/
    └── find_backpack.mp4                     backpack search outside the lab
```

Each clip's card, title, summary, and full [OBS]/[THINK]/[ACT] terminal
log live in `gallery.js` (the DEMOS array). Rename a file → update the
matching `src` there. A YouTube alternative works per clip: set
`yt: "<video id>"` instead of `src`.

Encoder tip — H.264 + faststart keeps clips scrub-friendly on GitHub Pages:

    ffmpeg -i input.mov -vcodec libx264 -crf 26 -vf scale=1280:-2 \
           -movflags +faststart -an output.mp4

GitHub blocks files over 100 MB; aim for under ~25 MB per clip, or host
larger clips on YouTube as unlisted and use the `yt` field.
