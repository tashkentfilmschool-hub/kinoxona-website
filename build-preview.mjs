import { readFile, writeFile } from "node:fs/promises";

const imageAssets = [
  "assets/kinoxona-logo.png",
  "assets/season-break.jpg",
  "assets/screening-sorrentino.jpg",
  "assets/screening-outsider.jpg",
  "assets/screening-barbara.jpg",
  "assets/screening-sokcho.jpg",
  "assets/screening-josep.jpg",
  "assets/screening-souleymane.jpg",
  "assets/screening-terminator-2.jpg",
  "assets/screening-ama-gloria.jpg",
  "assets/screening-adele-g.jpg",
  "assets/screening-burning.jpg",
  "assets/screening-breathless.jpg",
  "assets/screening-paris-memories.jpg",
  "assets/screening-freiburger-2025.jpg",
  "assets/screening-lives-of-others.jpg",
  "assets/screening-cotton-100.jpg",
  "assets/screening-schema.jpg",
  "assets/screening-souleymane-2025.jpg",
  "assets/screening-hate.jpg",
  "assets/screening-amateur-uzbek-cinema.jpg",
  "assets/screening-yol-kira.jpg",
  "assets/screening-love.jpg",
  "assets/screening-joqtau.jpg",
  "assets/screening-alisher-navoi.jpg",
  "assets/screening-paterson.jpg",
  "assets/screening-fifth-element.jpg",
  "assets/screening-die-my-love.jpg",
  "assets/venue-seats.jpg"
];

const [html, css, script, screenings, ...imageBuffers] = await Promise.all([
  readFile("index.html", "utf8"),
  readFile("styles.css", "utf8"),
  readFile("script.js", "utf8"),
  readFile("data/screenings.json", "utf8"),
  ...imageAssets.map((asset) => readFile(asset))
]);

const embeddedImages = new Map(imageAssets.map((asset, index) => {
  const mimeType = asset.endsWith(".png") ? "image/png" : "image/jpeg";
  return [asset, `data:${mimeType};base64,${imageBuffers[index].toString("base64")}`];
}));
const safeScreenings = screenings.replaceAll("</script", "<\\/script");
const safeScript = script.replaceAll("</script", "<\\/script");

let preview = html
  .replace(
    '<link rel="stylesheet" href="styles.css" />',
    `<style>\n${css}\n</style>`
  )
  .replace('<script src="script.js" defer></script>', "")
  .replace(
    "</body>",
    `  <script id="screenings-data" type="application/json">\n${safeScreenings}\n  </script>\n  <script>\n${safeScript}\n  </script>\n</body>`
  );

for (const [asset, dataUrl] of embeddedImages) {
  preview = preview.replaceAll(asset, dataUrl);
}

await writeFile("preview.html", preview, "utf8");
console.log(`Created preview.html (${Buffer.byteLength(preview)} bytes)`);
