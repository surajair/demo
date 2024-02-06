import type { ChaiBlock } from "@chaibuilder/sdk";
import { MultilineText, registerChaiBlock } from "@chaibuilder/blocks";
import { SpaceBetweenVerticallyIcon } from "@radix-ui/react-icons";

const RawTextBlock = (
  props: ChaiBlock & {
    content: string;
    inBuilder: boolean;
    blockProps: Record<string, string>;
  },
) => {
  if (props.inBuilder) {
    return <span {...props.blockProps}>&nbsp;{props.content}&nbsp;</span>;
  }
  return ` ${props.content} `;
};

registerChaiBlock(RawTextBlock, {
  type: "Text",
  label: "Text",
  hidden: true,
  category: "core",
  group: "basic",
  icon: SpaceBetweenVerticallyIcon,
  props: {
    content: MultilineText({ title: "Content", defaultValue: "" }),
  },
});
