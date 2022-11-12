import { readdirSync } from "fs";

export default function getJsFiles(dir: string) {
  const files = readdirSync(dir).filter((file) => file.endsWith(".js"));
  return files;
}
