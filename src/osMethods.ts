import { callbackFunction, params } from "./types";

class OS {
  public static listen(callback: callbackFunction) {
    window.onmessage = ({ data }) => {
      callback(data);
    };
  }

  public static OSListener(callback: callbackFunction) {
    window.addEventListener("message", ({ data }) => callback(data));
  }

  public static callCommand(
    method: string,
    params?: params,
    callback?: callbackFunction
  ) {
    if (!window || !window.top) {
      return;
    }

    window.top.postMessage(
      {
        origin: window.name,
        method: method,
        params: params,
      },
      "*"
    );

    if (callback) this.listen(callback);
  }
}

export default OS;
