import { Exit } from "@thijmen-os/common";

export type callbackFunction<T = unknown> = (res: Exit<T>) => unknown;
export type params = object | string | boolean | number;
