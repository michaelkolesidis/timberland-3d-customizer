import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { Color, Lace } from "../utils/types";

type State = {
  // Screen
  screen: 0 | 1 | 2 | 3;
  // Color
  color: Color;
  setColor: (col: Color) => void;
  // Laces
  laces: Lace;
  setLaces: (lac: Lace) => void;
};

const useStore = create<State>()(
  subscribeWithSelector((set) => ({
    /**
     * Screen
     * (the screen the user is at)
     *
     */
    screen: 0,
    /**
     * Color
     * (the color of the boots)
     *
     */
    color: "wheat nubuck",
    setColor: (col: Color) => {
      set(() => {
        return {
          color: col,
        };
      });
    },
    /**
     * Laces
     * (the color of the laces)
     *
     */
    laces: "yellow red",
    setLaces: (lac: Lace) => {
      set(() => {
        return {
          laces: lac,
        };
      });
    },
  }))
);

export default useStore;
