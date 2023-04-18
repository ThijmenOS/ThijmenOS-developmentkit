import { Directory, Exit, Mkdir, Path } from "@thijmen-os/common";
import OS from "../windowCommands";
import { callbackFunction } from "../types/types";

export function ls(
  path: Path,
  callback: callbackFunction<Exit<Array<Directory>>>
) {
  OS.callCommand("listFiles", path, callback);
}

export function readFile(path: Path, callback: callbackFunction<Exit<string>>) {
  OS.callCommand("readFile", path, callback);
}

export function cd(
  targetPath: string,
  callback: callbackFunction<Exit<string>>
) {
  OS.callCommand("changeDir", targetPath, callback);
}

//TODO: Better feedback for mkdir. return timestamp and such things
export function mkdir(args: Mkdir, callback?: callbackFunction<Exit>) {
  if (callback) {
    OS.callCommand("mkdir", args, callback);
    return;
  }
  OS.callCommand("mkdir", args);
}

export function rmdir(targetPath: Path, callback?: callbackFunction<Exit>) {
  if (callback) {
    OS.callCommand("rmdir", targetPath, callback);
    return;
  }
  OS.callCommand("rmdir", targetPath);
}

//TODO: Better feedback for mkdir. return timestamp and such things
export function touch(details: Mkdir, callback?: callbackFunction<Exit>) {
  if (callback) {
    OS.callCommand("touch", details, callback);
    return;
  }
  OS.callCommand("touch", details);
}
