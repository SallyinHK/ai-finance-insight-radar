import { readFile } from "node:fs/promises";
import path from "node:path";
import mammoth from "mammoth";

const DEFAULT_DOCX_PATH = path.join(process.cwd(), "Step1-7.docx");

export type DocxRenderResult = {
  html: string;
  messages: string[];
};

export async function convertDocxToHtml(
  docxPath: string = DEFAULT_DOCX_PATH,
): Promise<DocxRenderResult> {
  const buffer = await readFile(docxPath);
  const result = await mammoth.convertToHtml(
    { buffer },
    {
      // Keep the defaults simple and predictable.
      includeDefaultStyleMap: true,
    },
  );

  return {
    html: result.value,
    messages: result.messages.map((message) => message.message),
  };
}

export function getDefaultDocxPath(): string {
  return DEFAULT_DOCX_PATH;
}
