/* ==========================================================================
   Demo gallery — five real-robot videos, each paired with its terminal log.

   HOW TO EDIT
   -----------
   Every demo is one object in DEMOS below:

     family       "pick_place" | "navigation" | "search"
     title        card heading
     instruction  the spoken command
     summary      one line under the title
     src          path to the .mp4  (use this OR yt)
     yt           YouTube video ID as an alternative to src
     poster       optional thumbnail .jpg
     log          the [OBS]/[THINK]/[ACT] terminal sequence, pasted as-is;
                  the parser reads the tags and wraps continuation lines

   To swap in the real footage: drop the .mp4 at the path in `src`.
   To adjust a log: edit the template string — plain paste from the
   terminal transcript works, no re-formatting needed.
   ========================================================================== */

const FAMILIES = {
  pick_place: {
    label: "Pick & Place",
    blurb: "One spoken instruction expands into search, approach, grasp, traversal, and placement — the full Level-2 pipeline end to end.",
  },
  navigation: {
    label: "Navigation",
    blurb: "Long-horizon traversal through doorways, floor transitions, and corridor branches, with heading corrections along the way.",
  },
  search: {
    label: "Object Search",
    blurb: "Target acquisition beyond the current field of view: spatial priors, room-to-room transit, detection, and close-range verification.",
  },
};

const DEMOS = [

  /* ---------------- 1 · Pick & Place: chair → table ---------------- */
  {
    family: "pick_place",
    title: "Water bottle: office chair → table",
    instruction: "Pick up the water bottle and place it on the table",
    summary: "In the lab. A left sweep finds the bottle on a chair seat; the robot closes in, reacquires it below the camera horizon, grasps from the side, then scans for a table and sets it down upright.",
    src: "assets/videos/pick_place/chair_to_table.mp4",
    log: `
[OBS]  Wall ahead at range 3.2 m, no target in current field of view
[THINK] Bottle not visible from current heading. Initiate left sweep
        to scan for target
[ACT]  Turning left, scanning for water bottle
[OBS]  Office chair detected at bearing -40 degrees, water bottle on
       seat cushion, range 1.6 m, conf 0.88
[THINK] Target acquired on chair. Approach in small increments to
        avoid overshoot of manipulator workspace
[ACT]  Moving forward 0.3 meters
[OBS]  Bottle range 1.3 m, still centered in frame
[ACT]  Moving forward 0.2 meters
[OBS]  Bottle range 1.1 m, chair armrest entering frame edge
[ACT]  Moving forward 0.2 meters
[OBS]  Bottle exited field of view, last known position below camera
       horizon
[THINK] Object disappeared, likely within close-range workspace.
        Tilt head down to reacquire and verify grasp range
[ACT]  Camera down 25 degrees
[OBS]  Bottle reacquired on chair seat, range 0.5 m, height 0.42 m,
       within manipulator reach envelope
[ACT]  Moving forward 0.3 meters
[THINK] Bottle confirmed in picking range. Base currently perpendicular
       to chair, need lateral alignment for side grasp
[ACT]  Turning left 90 degrees
[OBS]  Base parallel to chair, bottle on right at bearing +90 degrees,
       clear lateral approach path
[THINK] Plan side grasp around bottle midsection
[ACT]  Extending arm toward bottle, opening gripper
[ACT]  Aligning end-effector with bottle midsection
[ACT]  Closing gripper
[OBS]  Grasp force stable at 7 N, bottle lifted 4 cm off cushion,
       no slip detected
[THINK] Grasp confirmed. Retract arm to travel pose before searching
       for placement surface
[ACT]  Retracting arm to carry configuration
[OBS]  Bottle secured at carry height, ready for traversal
[THINK] Placement target is a table surface. Initiate left sweep to
       locate suitable flat surface in workspace
[ACT]  Turning left, scanning for table
[OBS]  Long table detected at bearing -30 degrees, range 1.8 m, surface
       height 0.74 m, clear area for placement
[THINK] Table identified. Approach front edge for arm extension
[OBS]  Table edge at range 0.4 m, clear placement zone within reach
[ACT]  Turning right 90 degrees
[THINK] Place bottle upright on table surface, away from edge
[ACT]  Extending arm over table surface
[ACT]  Lowering bottle to table
[OBS]  Bottle base contact with table confirmed, vertical alignment ok
[ACT]  Opening gripper
[THINK] Placement stable. Retract arm clear of table
[ACT]  Retracting arm to home configuration
[OBS]  Bottle in place, manipulator clear, task complete
[ACT]  Confirmed water bottle placed on table
`,
  },

  /* -------------- 2 · Pick & Place: bottle → trash can -------------- */
  {
    family: "pick_place",
    title: "Water bottle: table → trash can",
    instruction: "Find the water bottle and put it in the trash can",
    summary: "A search sweep locates the bottle; after the grasp, a second sweep finds the trash can, and the robot releases the bottle over the opening instead of onto a surface.",
    src: "assets/videos/pick_place/bottle_to_trashcan.mp4",
    log: `
[ACT]  Start searching for Pringles can
[OBS]  Carpeted lab, computers on desk in right, Pringles can detected on desk at bearing +25 degrees, range 1.4 meters
[THINK]  Target identified. Approach desk to bring can within manipulator workspace
[OBS]  Can centered at bearing +30 degrees, range 0.6 m, height 0.45 m above floor
[THINK]  Within reach envelope. Align base parallel to bench for lateral arm extension
[ACT]  Turning left 20 degrees
[OBS]  Desk edge parallel to base, can in manipulator workspace, clear top-down approach
[THINK]  Plan top grasp, fingers around can midsection
[ACT]  Extending arm, opening gripper
[ACT]  Raising end-effector to can height
[OBS]  Gripper aligned with can, contact surfaces clear
[ACT]  Closing gripper
[THINK]  Grasp confirmed. Retract arm to travel pose before locomotion
[ACT]  Retracting arm to carry configuration
[OBS]  Can secured at carry height, path clear ahead
[THINK]  Trash can location recalled from prior map, alcove on right side of room. Plan path along tile centerline
[ACT]  Moving forward 1 meter
[ACT]  Turning right 90 degrees
[ACT]  Turning right 90 degrees
[THINK]  Need to search for object
[ACT]  Beginning advanced search for trash can
[OBS]  Pathway visible on left, brown box detected, trash can identified
[ACT]  Moving toward trash can in 6, 0.2 meter increments
[THINK]  Need to reach target surface
[ACT]  Turning right and moving forward 1 meter
[THINK]  Must face trash can to approve placement surface
[ACT]  Turning left 60 degrees
[OBS]  Trash can centered 2 meters away
[THINK]  Must approach trash can
[ACT]  Approaching trash can in 0.2 meter increments
[THINK]  Trash can reached, need to adjust for placement
[ACT] Turning left 90 degrees
[THINK]  Place bottle on trash can ledge
[ACT]  Extending arm to trash can ledge
[ACT]  Lowering can to ledge surface
[ACT]  Rotating gripper for placement
[THINK]  Rotated wrong direction, rotating in opposite direction
[ACT]  Opening gripper
[OBS]  Can released, standing on trash can, no tipping
[THINK]  Placement stable. Retract arm clear of fixture
[ACT]  Confirmed Pringles can placed at trash can
`,
  },

  /* ----------- 3 · Pick & Place: bench → water fountain ----------- */
  {
    family: "pick_place",
    title: "Water bottle: hallway bench → water fountain",
    instruction: "Pick up the water bottle and place it on the water fountain",
    summary: "In the hallway. The bottle sits on a red bench; after a top grasp the robot recalls the fountain alcove from its map, drives down the corridor, and sets the bottle on the basin ledge.",
    src: "assets/videos/pick_place/bench_to_fountain.mp4",
    log: `
[ACT]  Start searching for water bottle
[OBS]  Tiled hallway, red benches on right, water bottle detected on
       bench at bearing +25 degrees, range 1.4 m
[THINK] Target identified. Approach bench to bring bottle within
       manipulator workspace
[ACT]  Moving forward 0.8 meters
[OBS]  Bottle centered at bearing +30 degrees, range 0.6 m, height 0.45 m
       above floor
[THINK] Within reach envelope. Align base parallel to bench for lateral
       arm extension
[ACT]  Turning left 90 degrees
[OBS]  Bench edge parallel to base, bottle in manipulator workspace,
       clear top-down approach
[THINK] Plan top grasp, fingers around bottle midsection
[ACT]  Extending arm, opening gripper
[ACT]  Lowering end-effector to bottle height
[OBS]  Gripper aligned with bottle, contact surfaces clear
[ACT]  Closing gripper
[OBS]  Grasp force stable at 8 N, bottle lifted 5 cm, no slip detected
[THINK] Grasp confirmed. Retract arm to travel pose before locomotion
[ACT]  Retracting arm to carry configuration
[OBS]  Bottle secured at carry height, hallway clear ahead
[THINK] Fountain location recalled from prior map, alcove on right side
       of corridor. Plan path along tile centerline
[ACT]  Moving forward 1 meter
[ACT]  Turning right 50 degrees
[ACT]  Moving forward 1.5 meters
[ACT]  Turning right 100 degrees
[OBS]  Hallway alcove visible on left, stainless fixture detected,
       fountain basin identified
[THINK] Target placement surface reached. Align base with fountain
       front face
[ACT]  Turning left 40 degrees
[ACT]  Moving forward 0.2 meters
[ACT]  Moving forward 0.2 meters
[ACT]  Moving forward 0.2 meters
[OBS]  Fountain basin centered at bearing 0 degrees, range 0.4 m,
       basin lip height 0.95 m
[ACT]  Turning left 90 degrees
[THINK] Place bottle on basin ledge, upright orientation for stability
[ACT]  Extending arm to basin ledge
[ACT]  Raising bottle to ledge surface
[OBS]  Bottle base contact with ledge confirmed, vertical alignment ok
[ACT]  Rotating and opening gripper
[OBS]  Bottle released, standing upright on basin ledge, no tipping
[THINK] Placement stable. Retract arm clear of fixture
[ACT]  Retracting arm to home configuration
[OBS]  Bottle in place, manipulator clear, task complete
[ACT]  Confirmed water bottle placed at fountain
`,
  },

  /* ------------------ 4 · Navigation: study room ------------------ */
  {
    family: "navigation",
    title: "Traversal to the far side of the study room",
    instruction: "Go to the other side of the study room",
    summary: "A long-horizon route: through the entry corridor, across the glass-walled room over a wood-to-carpet transition, out a narrow passage between partitions, and down two corridor branches to the destination wing.",
    src: "assets/videos/navigation/study_room_traversal.mp4",
    log: `
[OBS]  Wood floor under base, glass-walled study room ahead, tables and
       chairs visible through partition
[THINK] Entry corridor open. Advance toward room threshold
[ACT]  Moving forward 1.5 meters
[OBS]  Floor transition wood-to-carpet detected, room interior visible,
       conference table on left at range 2.2 m
[THINK] Inside room perimeter. Continue along entry axis to clear
       doorway zone
[ACT]  Moving forward 2 meters
[OBS]  Open carpet area, furniture cluster on left, clear path on right
[THINK] Reorient toward room interior to plan traversal across the space
[ACT]  Turning left 90 degrees
[OBS]  Heading aligned with room long axis, far wall windows visible at
       range 5 m, no obstacles within 2 m
[THINK] Open corridor through room center. Advance to first waypoint
[ACT]  Moving forward 1.5 meters
[OBS]  Mid-room position, chairs on right at bearing +30 degrees, clear
       ahead
[ACT]  Moving forward 1 meter
[OBS]  Approaching far side of room, glass partition visible ahead,
       second doorway emerging on right
[ACT]  Moving forward 1 meter
[OBS]  Glass partitions framing narrow passage, exit corridor at bearing
       +10 degrees
[THINK] Maintain heading, exit corridor within reach
[ACT]  Moving forward 1.5 meters
[OBS]  Passage cleared, hallway opening on left, wood floor visible
       beyond carpet boundary
[THINK] Reorient toward hallway exit
[ACT]  Turning left 70 degrees
[OBS]  Hallway aligned, floor transition carpet-to-wood at 0.6 m
[ACT]  Moving forward 1 meter
[OBS]  Wood floor under base, hallway environment, study room behind
[ACT]  Moving forward 1 meter
[OBS]  Mid-hallway, TV and door visible at far end, slight heading drift
       detected
[THINK] Correct heading to center hallway axis
[ACT]  Turning right 40 degrees
[ACT]  Moving forward 1 meter
[OBS]  Hallway centered, far corridor branching left, target region in
       opposite wing
[THINK] Branch left to reach destination side
[ACT]  Turning left 90 degrees
[OBS]  New corridor aligned, clear path ahead, range to next decision
       point 2.5 m
[ACT]  Moving forward 2 meters
[OBS]  Approaching corridor bend, wall on right curving away, opening
       on left
[THINK] Final heading adjustment to enter destination area
[ACT]  Turning left 30 degrees
[OBS]  Destination side of study room visible, clear floor ahead
[ACT]  Moving forward 1.5 meters
[OBS]  Arrival position reached, opposite side of study room confirmed
[THINK] Goal reached. Traversal complete
[ACT]  Confirmed navigation to other side of study room complete
`,
  },

  /* ------------------- 5 · Search: find backpack ------------------- */
  {
    family: "search",
    title: "Find the backpack outside the lab",
    instruction: "Please find my backpack. It's outside of the lab",
    summary: "The target is beyond the current room. The robot reasons that transit spaces have a higher prior for personal items, exits through the doorway, detects the backpack in the hallway, and closes in for visual confirmation.",
    src: "assets/videos/search/find_backpack.mp4",
    log: `
[OBS]  Scene: bookshelf and no backpack in current field of view
[THINK] Target absent in current frame. Door on right opens to hallway,
        higher prior for personal items in transit spaces
[ACT]  Moving forward 1 meter
[OBS]  Free space ahead 1.2 m, door frame now centered-right
[THINK] Reorient toward doorway before traversal
[ACT]  Turning right 80 degrees
[OBS]  Door frame off-axis by ~10 degrees, threshold visible
[THINK] Small heading correction needed to clear door cleanly
[ACT]  Turning right 10 degrees
[OBS]  Doorway aligned, hallway detected beyond threshold, carpet
       texture, posters on right wall
[THINK] Path clear. Advance into hallway for wider search volume
[ACT]  Moving forward 1.5 meters
[OBS]  Hallway confirmed, candidate object detected on floor at bearing
       -35 degrees, range 1.8 m, class: backpack, conf 0.82
[THINK] Candidate matches target class. Engage focused search behavior
        for verification
[ACT]  Starting advanced search for backpack
[OBS]  Object centroid stable across frames, shape consistent with
       backpack, on carpet
[THINK] High-confidence match. Reduce range for visual confirmation
[ACT]  Approaching backpack
[OBS]  Object exited camera frame at range < 0.6 m
[THINK] Object now below camera horizon, geometry suggests robot has
        reached it. Tilt head down to verify
[ACT]  Object disappeared, likely reached it, and need to confirm
[ACT]  Camera down 30 degrees
[OBS]  Backpack in frame, fully visible on carpet, range 0.5 m, visual
       match confirmed
[THINK] Target reached and identified. Task complete
[ACT]  Confirmed backpack has been approached
`,
  },
];

/* ========================== rendering ========================== */

function el(tag, cls, html) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* Parse a pasted [OBS]/[THINK]/[ACT] transcript into tagged entries.
   Untagged lines continue the previous entry. */
function parseLog(raw) {
  const entries = [];
  for (const line of raw.split("\n")) {
    const m = line.match(/^\[(OBS|THINK|ACT)\]\s*(.*)$/);
    if (m) {
      entries.push({ tag: m[1], text: m[2].trim() });
    } else if (line.trim() && entries.length) {
      entries[entries.length - 1].text += " " + line.trim();
    }
  }
  return entries;
}

function mediaFor(item) {
  const wrap = el("div", "video-frame");
  if (item.yt) {
    wrap.innerHTML =
      `<iframe src="https://www.youtube-nocookie.com/embed/${item.yt}"
               title="${esc(item.title || "video")}"
               loading="lazy" allowfullscreen
               allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"></iframe>`;
    return wrap;
  }
  const video = document.createElement("video");
  video.controls = true;
  video.preload = "metadata";
  video.muted = true;
  video.playsInline = true;
  if (item.poster) video.poster = item.poster;
  video.src = item.src;
  video.addEventListener("error", () => {
    wrap.classList.add("video-missing");
    wrap.innerHTML =
      `<div class="missing-label">clip pending<br><code>${esc(item.src)}</code></div>`;
  }, { once: true });
  wrap.appendChild(video);
  return wrap;
}

function terminalFor(item) {
  const term = el("div", "terminal");
  term.appendChild(el("div", "tl tl-prompt",
    `<span class="tl-dollar">$</span> <span class="tl-cmd">${esc(item.instruction)}</span>`));
  for (const entry of parseLog(item.log)) {
    term.appendChild(el("div", `tl tl-${entry.tag.toLowerCase()}`,
      `<span class="tag">[${entry.tag}]</span><span class="tl-text">${esc(entry.text)}</span>`));
  }
  return term;
}

function cardFor(item) {
  const card = el("article", "demo-card");
  card.dataset.family = item.family;

  const media = el("div", "demo-media");
  media.appendChild(mediaFor(item));

  const side = el("div", "demo-side");
  side.appendChild(el("p", "demo-family-label", FAMILIES[item.family].label));
  side.appendChild(el("h3", "demo-title", esc(item.title)));
  side.appendChild(el("p", "demo-summary", esc(item.summary)));
  side.appendChild(terminalFor(item));

  card.appendChild(media);
  card.appendChild(side);
  return card;
}

function renderFeatured() {
  const slot = document.getElementById("featured-video");
  if (!slot) return;
  slot.appendChild(mediaFor({
    src: slot.dataset.src,
    poster: slot.dataset.poster,
    yt: slot.dataset.yt || "",
    title: "Overview video",
  }));
}

function renderGallery() {
  const gallery = document.getElementById("gallery");
  const bar = document.getElementById("filter-bar");

  for (const [key, fam] of Object.entries(FAMILIES)) {
    const n = DEMOS.filter(d => d.family === key).length;
    if (!n) continue;
    const btn = el("button", "filter",
      `${fam.label} <span class="count">${n}</span>`);
    btn.dataset.family = key;
    bar.appendChild(btn);
  }

  DEMOS.forEach(d => gallery.appendChild(cardFor(d)));

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    bar.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const pick = btn.dataset.family;
    gallery.querySelectorAll(".demo-card").forEach(c => {
      c.style.display = (pick === "all" || c.dataset.family === pick) ? "" : "none";
    });
  });
}

renderFeatured();
renderGallery();
