import { PermissionRequestDto, Permissions } from "@thijmen-os/common";
import OS from "../windowCommands";
import { callbackFunction } from "../types/types";

export function AskPermission(
  permission: Permissions,
  callback?: callbackFunction<boolean>
) {
  if (callback) {
    OS.callCommand("askPermission", permission, callback);
  }
  OS.callCommand("askPermission", permission);
}

export function RevokeAllPermissions(
  applicationId: string,
  callback?: callbackFunction<boolean>
) {
  if (callback) {
    OS.callCommand("revokeAllPermissions", applicationId, callback);
  }
  OS.callCommand("revokeAllPermissions", applicationId);
}

export function revokePermission(
  details: PermissionRequestDto,
  callback?: callbackFunction<boolean>
) {
  if (callback) {
    OS.callCommand("revokePermission", details, callback);
  }
  OS.callCommand("revokePermission", details);
}
