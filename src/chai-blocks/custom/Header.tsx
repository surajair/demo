import { registerChaiBlock, Styles } from "@chaibuilder/blocks";
import { HeaderClient } from "./client/Header";

/**
 * @param props
 * @constructor
 */
export function Header(props: any) {
  return <HeaderClient {...props} />;
}

registerChaiBlock(Header, {
  type: "Header",
  label: "Header Simple",
  group: "Header",
  preview: "",
  props: {
    signInBtnStyles: Styles({
      default:
        "flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex",
    }),
  },
});
