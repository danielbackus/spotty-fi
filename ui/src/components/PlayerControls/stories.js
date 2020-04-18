import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import PlayerControls from ".";

export default {
  title: "Components/PlayerControls",
  component: PlayerControls,
  decorators: [withKnobs],
};

export const Default = () => (
  <PlayerControls
    playing={boolean("Playing", false)}
    onPlayPause={action("onPlayPause")}
  />
);
