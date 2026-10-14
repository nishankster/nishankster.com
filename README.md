# nishankster.com: how to keep it up to date

The site is three small files plus a photos folder. **You only ever need to edit `content.js`.**

| File | What it is | Do you edit it? |
|---|---|---|
| `content.js` | Every word, link, project, post, photo and "now" item | **Yes, this is the one** |
| `index.html` | The design (colours, patterns, layout) | Rarely, only to change the look |
| `CNAME` | Tells GitHub Pages your domain is nishankster.com | Never |
| `photos/` | Your images | Add files whenever you like |

## Editing text (2 minutes, all in the browser)

1. Go to your repository on github.com and click **`content.js`**.
2. Click the **pencil icon** (Edit this file).
3. Change the text between the "double quotes".
4. Click **Commit changes…** → **Commit changes**.
5. The live site updates in about a minute. Hard-refresh the page if you don't see it (Cmd+Shift+R on Mac, Ctrl+F5 on Windows).

### Three rules that prevent almost every problem
- Text stays inside **"double quotes"**. If you need a quote mark inside text, use curly ones: ’ “ ”.
- Every item in a list ends with a **comma**. Copy an existing item, paste it, then change it.
- Wrap a word in `*asterisks*` to make it red and stand out, e.g. `"Let’s *talk shop*."`

If you make a typo, the site shows a red banner saying so. Fix it by opening the file again and clicking the **History** button, or by re-doing your edit carefully.

## Common updates

**Add a project:** in the `work:` list, copy one `{ ... },` block, paste it below, and change the label, title and text. Add `featured: true,` to make it the wide indigo card.

**Publish a post:** in `writing:`, change `date: "coming soon"` to something like `"Nov 2026"` and put the link in `url: "https://medium.com/..."`. Posts with a url become clickable.

**Update "Now":** edit the `now:` items and the `updated:` month. Add `done: true` to tick one off.

**Add your photos:**
1. On the repo's main page click **Add file → Upload files**.
2. Drag your images in. Before committing, type `photos/` at the start of the filename box (or upload into the photos folder once it exists) so they land in a `photos` folder.
3. Commit.
4. In `content.js`, set each photo's `src`, e.g. `{ src: "photos/piedmont-park.jpg", caption: "golden hour" },`
   Tip: resize photos to about 1200px wide before uploading so the page stays fast. Six photos look best; any number works.

**Change email or links:** edit the `contact:` section at the bottom.

## Preview before publishing (optional)
Download `index.html` and `content.js` into the same folder on your computer and double-click `index.html`. It opens in your browser exactly as it will look online.

## Changing the look (optional)
Colours are at the top of `index.html` under `:root`: `--accent` is the single accent colour (terracotta), `--calm` the soft sage, `--bg` the page background and `--ink` the text. Change a hex value and the whole site follows.

The logo (a single-line "nj" monogram with a terracotta dot) is defined once near the top of the `<body>` in `index.html`, in the block marked "Logo".
