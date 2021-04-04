import 'custom-event-polyfill';

export function subscribeEvent(
  type: keyof GlobalEventHandlersEventMap,
  name: string,
  obj: Element | Window | Document = window
) {
  let running = false;

  const runCallback = () => {
    obj.dispatchEvent(new CustomEvent(name));
    running = false;
  };

  const execute = () => {
    if (running) {
      return;
    }

    running = true;

    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(runCallback);
    } else {
      setTimeout(runCallback, 66);
    }
  };

  obj.addEventListener(type, execute);
}
