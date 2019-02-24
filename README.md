# ui-event-performance

[![NPM version](https://img.shields.io/npm/v/ui-event-performance.svg)](https://www.npmjs.com/package/ui-event-performance)
[![NPM monthly download](https://img.shields.io/npm/dm/ui-event-performance.svg)](https://www.npmjs.com/package/ui-event-performance)

> Optimised way to subscribe to browser DOM UI Events using requestAnimationFrame.

Since resize/scroll events can fire at a high rate, the event handler shouldn't execute computationally expensive operations such as DOM modifications. Instead, it is recommended to throttle the event using `requestAnimationFrame`.

Refer documentation:
https://developer.mozilla.org/en-US/docs/Web/Events/resize#requestAnimationFrame_customEvent

## Installation

```bash
yarn add ui-event-performance
```

## Usage

```js
import subscribeEvent from 'ui-event-performance';

// window event listener
subscribeEvent('resize', 'optimizedResize');
window.addEventListener('optimizedResize', () => {
  console.log('Resource conscious resize callback!');
});

// with DOM element listener
const wrapperElement = document.querySelector('my-wrapper');
const handleScroll = () => {
  console.log('Wrapper is scrolling');
};
subscribeEvent('scroll', 'optimizedScroll', wrapperElement);
wrapperElement.addEventListener('optimizedScroll', handleScroll);

// remove event listener
wrapperElement.removeEventListener('optimizedScroll', handleScroll);
```

## License

MIT © [Nghiep](https://nghiepit.pro)
