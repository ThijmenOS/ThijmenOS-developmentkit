import { Path } from "@thijmen-os/common";
import OS from "../windowCommands";

export function OpenLocation(props: { mimeType: string; filePath: Path }) {
  OS.callCommand("openFile", props);
}
