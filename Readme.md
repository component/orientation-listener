
# orientation-listener

  Listen for device orientation changes.

## Installation

  Install with [component(1)](http://component.io):

    $ component install component/orientation-listener

## Example

  ```javascript
  import Listener from 'orientation-listener';

  const orientationCallbackFn = function orientationCallbackFn(orientation) {
    console.log('orientation: ', orientation);
  };

  const orientationChangeListener = new Listener();
  orientationChangeListener.on('change', orientationCallbackFn)
  ```

## API

### Listener()

  Initialize a new Listener.

### Listener.orientation()

  Return the orientation type, "landscape" or "portrait".

### Listener.unbind()

  Unbind listeners.

## License

  MIT
