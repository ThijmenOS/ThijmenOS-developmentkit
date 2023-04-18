import { Exit, MemoryAccess } from "@thijmen-os/common";
import { callbackFunction } from "src/types/types";
import OS from "../windowCommands";

export function MemAlloc(
  args: { memoryKey: string; memoryAccess: Array<MemoryAccess> },
  callback?: callbackFunction<Exit>
) {
  if (callback) {
    OS.callCommand("memAlloc", args, callback);
    return;
  }

  OS.callCommand("memAlloc", args);
}

export function MemRead<T>(
  memoryKey: string,
  callback?: callbackFunction<Exit<T>>
) {
  if (callback) {
    OS.callCommand("memRead", memoryKey, callback);
    return;
  }

  OS.callCommand("memRead", memoryKey);
}

export function MemWrite<T>(
  args: { memoryKey: string; data: T },
  callback?: callbackFunction<Exit<T>>
) {
  if (callback) {
    OS.callCommand("memWrite", args, callback);
    return;
  }

  OS.callCommand("memWrite", args);
}
