declare global {
  interface Window {
    umami: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void;
    };
  }
}

export const umami = {
  track: (eventName: string, eventData?: Record<string, unknown>) => {
    if (window.umami) {
      window.umami.track(eventName, eventData);
    }
  },
};
