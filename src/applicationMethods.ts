import { Path } from "@thijmen-os/common";
import OS from "./osMethods";
import { callbackFunction } from "./types";

export function OpenFileWithApplication(
  props: { mimeType: string; filePath: Path },
  callback?: callbackFunction<boolean>
) {
  if (callback) {
    return OS.callCommand("openFile", props, callback);
  }

  return OS.callCommand("openFile", props);
}

export function CloseSelf() {
  OS.callCommand("closeSelf");
}
