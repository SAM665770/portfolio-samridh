import { create } from "zustand";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants";
import { immer } from "zustand/middleware/immer";

export const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        if (!state.windows[windowKey]) return;
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        if (!state.windows[windowKey]) return;
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        if (!state.windows[windowKey]) return;
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
      }),
  }))
);


/* 
Immer is a library that makes it easier to write immutable state updates in JavaScript. It's commonly used with state management libraries like Zustand, Redux, and others.

What it does:

Immer lets you write state updates using "mutating" syntax (which looks natural and readable), but automatically converts those changes into immutable updates behind the scenes. You write code that looks like you're mutating the state directly, but Immer ensures the original state remains unchanged.

Example with Immer (your code):
set((state) => {
  const win = state.windows[windowKey];
  win.isOpen = true;  // Looks like mutation
  win.zIndex = state.nextZIndex;
  state.nextZIndex++;
})

Without Immer (more verbose):
set((state) => ({
  windows: {
    ...state.windows,
    [windowKey]: {
      ...state.windows[windowKey],
      isOpen: true,
      zIndex: state.nextZIndex
    }
  },
  nextZIndex: state.nextZIndex + 1
}))

Benefits:

Readability - Code is cleaner and easier to understand
Less boilerplate - No need for spread operators and nested object copying
Fewer bugs - Harder to accidentally mutate state when using the straightforward syntax
Performance - Immer efficiently detects what changed and only copies what's necessary
Maintainability - Updates are simpler to write and modify */
