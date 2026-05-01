import fs from "node:fs/promises";
import path from "node:path";
import mammoth from "mammoth";

const root = process.cwd();
const inputPath = process.argv[2] || path.join(root, "Step1-7.docx");
const outputPath =
  process.argv[3] || path.join(root, "public", "content", "step1-7.html");

async function run() {
  const buffer = await fs.readFile(inputPath);
  const { value: html, messages } = await mammoth.convertToHtml(
    { buffer },
    { includeDefaultStyleMap: true },
  );

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html, "utf8");

  console.log(`Extracted HTML written to: ${outputPath}`);
  if (messages.length > 0) {
    console.log("Mammoth messages:");
    for (const message of messages) {
      console.log(`- ${message.type}: ${message.message}`);
    }
  }
}

run().catch((error) => {
  console.error("Failed to extract DOCX:", error);
  process.exit(1);
});
