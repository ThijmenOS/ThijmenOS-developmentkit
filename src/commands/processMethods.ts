import { Exit } from "@thijmen-os/common";
import { callbackFunction } from "../types/types";
import OS from "../windowCommands";

export function startProcess(
  exePath: string,
  callback?: callbackFunction<Exit>
) {
  if (callback) {
    OS.callCommand("startProcess", exePath, callback);
    return;
  }
}

export function terminateProcess(
  pid: string,
  callback?: callbackFunction<Exit>
) {
  if (callback) {
    OS.callCommand("terminateProcess", pid, callback);
    return;
  }

  OS.callCommand("terminateProcess", pid);
}

export function startWindowProcess(
  args: { guiPath: string; args?: string },
  callback?: callbackFunction<Exit>
) {
  if (callback) {
    OS.callCommand("spawnWindow", args, callback);
    return;
  }

  OS.callCommand("spawnWindow", args);
}
