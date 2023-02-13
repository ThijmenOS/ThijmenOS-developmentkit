import { Mkdir, Path } from "@thijmen-os/common";
import OS from "./osMethods";
import { callbackFunction } from "./types";

export function cd(targetPath: string, callback?: callbackFunction<string>) {
  if (callback) {
    return OS.callCommand("changeDir", targetPath, callback);
  }

  return OS.callCommand("changeDir", targetPath);
}

//TODO: Better feedback for mkdir. return timestamp and such things
export function mkdir(targetPath: Mkdir) {
  OS.callCommand("mkdir", targetPath);
}

export function rmdir(targetPath: Path, callback?: callbackFunction<boolean>) {
  if (callback) {
    OS.callCommand("rmdir", targetPath, callback);
  }
  OS.callCommand("rmdir", targetPath);
}

export function readFile(filePath: Path, callback: callbackFunction<string>) {
  OS.callCommand("readFile", filePath, callback);
}

export function ls(path: Path, callback: callbackFunction<Array<string>>) {
  OS.callCommand("filesInDir", path, callback);
}

//TODO: Better feedback for mkdir. return timestamp and such things
export function touch(details: Mkdir) {
  OS.callCommand("touch", details);
}
