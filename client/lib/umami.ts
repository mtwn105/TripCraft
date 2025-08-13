declare global {
  interface Window {
    umami: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

export const umami = {
  track: (eventName: string, eventData?: Record<string, any>) => {
    if (window.umami) {
      window.umami.track(eventName, eventData);
    }
  },
};
