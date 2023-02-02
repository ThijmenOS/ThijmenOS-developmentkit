export type callbackFunction<T = unknown> = (
  res: Event<T | unknown>
) => unknown;
export type params = object | string | boolean | number;
export type Event<T> = {
  eventName: string;
  eventSender: string;
  eventData: T;
};
