import * as React from "react";
import { CodeIcon } from "@radix-ui/react-icons";
import { MultilineText, registerChaiBlock, Styles } from "@chaibuilder/blocks";
import type { ChaiBlock } from "@chaibuilder/sdk";

const CustomHTMLBlock = (
  props: ChaiBlock & {
    blockProps: Record<string, string>;
    styles: Record<string, string>;
  },
) => {
  const { blockProps, styles, content } = props;
  return React.createElement("div", {
    ...styles,
    ...blockProps,
    dangerouslySetInnerHTML: { __html: content },
  });
};

registerChaiBlock(CustomHTMLBlock as React.FC<any>, {
  type: "CustomHTML",
  label: "CustomHTML",
  category: "core",
  icon: CodeIcon,
  group: "basic",
  props: {
    styles: Styles({ default: "" }),
    content: MultilineText({
      title: "HTML Content",
      default: "",
      placeholder: "Enter custom HTML code here",
    }),
  },
});
