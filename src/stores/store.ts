import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { Screen, Color, Lace } from "../utils/types";

type State = {
  // Screen
  screen: Screen;
  setScreen: (scr: Screen) => void;
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
     * (the screen the user is currently at)
     *
     */
    screen: "home",
    setScreen: (scr: Screen) => {
      set(() => {
        return {
          screen: scr,
        };
      });
    },
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
