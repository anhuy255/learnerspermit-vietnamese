# Hình ảnh câu hỏi / Question images

Drop sign and handbook visuals here. A question shows an image when its
`image` field (in `data/questions.js`) is set to a filename in this folder:

```js
image: "stop-sign.png"   // → loads images/stop-sign.png
image: null              // → no image
```

If the file is missing, the app hides the broken image automatically
(the question still works), so you can wire `image` first and drop the
file in later.

## Placeholders currently referenced

These ship as simple hand-drawn `.svg` placeholders so the image wiring
works out of the box. Replace them with the real handbook visuals
(PUB 95) when available — you can either overwrite the `.svg` or switch
the question's `image` field to a `.png`/`.jpg`.

| filename           | used by | what it should show                  |
|--------------------|---------|--------------------------------------|
| `stop-sign.svg`    | q-001   | Red octagon STOP sign                |
| `warning-sign.svg` | q-003   | Yellow diamond warning sign          |
| `school-bus.svg`   | q-012   | School bus with red flashing lights  |

## How to add a real image

1. Save the image into this folder (PNG or JPG recommended, keep it small).
2. Set `image: "your-file.png"` on the matching question in
   `data/questions.js`.
3. Reload the app — no code changes needed.

> Use only visuals from the official PennDOT PUB 95 (bản tiếng Việt) handbook.
