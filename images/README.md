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

## Real images currently in use

These were extracted directly from the official PennDOT PUB 95 (bản tiếng
Việt) PDF — cropped from the rendered handbook pages.

| filename                     | used by | sign / visual                         | handbook source            |
|------------------------------|---------|---------------------------------------|----------------------------|
| `stop-sign.png`              | q-001   | Red octagon STOP sign                 | Chương 2, trang in 10      |
| `warning-curve.png`          | q-003   | Yellow diamond warning (left curve)   | Chương 2, trang in 13      |
| `work-zone-sign.png`         | q-021   | Orange diamond "ROAD WORK AHEAD"      | Chương 2, trang in 18      |
| `route-marker-keystone.png`  | q-022   | PA keystone state-route marker ("39") | Chương 2, trang in 21      |
| `service-sign-gas.png`       | q-023   | Blue service sign (gas pump)          | Chương 2, trang in 21      |
| `school-bus-stop.png`        | q-012   | School-bus stopping diagram (10 ft)   | Chương 3, trang in 58      |

## How to add a real image

1. Save the image into this folder (PNG or JPG recommended, keep it small).
2. Set `image: "your-file.png"` on the matching question in
   `data/questions.js`.
3. Reload the app — no code changes needed.

## How these were extracted (for reference)

Using PyMuPDF on the handbook PDF: render the relevant page, locate the
sign (by vector fill color or embedded-image rect), then crop that region
at 300 DPI. Example:

```python
import fitz
doc = fitz.open("pub 95v.pdf")
clip = fitz.Rect(71, 300, 125, 353)            # sign bbox in PDF points
doc[13].get_pixmap(clip=clip, dpi=300).save("images/stop-sign.png")
```

> Use only visuals from the official PennDOT PUB 95 (bản tiếng Việt) handbook.
