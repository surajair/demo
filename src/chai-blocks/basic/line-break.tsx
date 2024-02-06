import * as React from "react";
import type { ChaiBlock } from "@chaibuilder/sdk";
import { registerChaiBlock, Styles } from "@chaibuilder/blocks";
import { SpaceBetweenVerticallyIcon } from "@radix-ui/react-icons";

const LineBreakComponent = (
  props: ChaiBlock & { styles: any; blockProps: Record<string, string> },
) => {
  const { blockProps, styles } = props;
  return React.createElement("br", { ...blockProps, ...styles });
};

registerChaiBlock(LineBreakComponent, {
  type: "LineBreak",
  label: "Line Break",
  category: "core",
  group: "basic",
  icon: SpaceBetweenVerticallyIcon,
  props: {
    styles: Styles({ default: "" }),
  },
});
