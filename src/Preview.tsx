import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import "@chaibuilder/sdk/blocks";
import { getStylesForPageData } from "@chaibuilder/sdk/lib";
import { RenderChaiBlocks } from "@chaibuilder/sdk/render";
import { lsBlocksAtom, lsBrandingOptionsAtom } from "./atoms";

function Preview() {
  const [blocks] = useAtom(lsBlocksAtom);
  const [brandingOptions] = useAtom(lsBrandingOptionsAtom);
  const [allStyles, setStyles] = useState<string>();

  useEffect(() => {
    (async () => {
      const styles = await getStylesForPageData({
        page: { blocks },
        project: { brandingOptions },
      });
      setStyles(styles);
    })();
  }, [blocks, brandingOptions]);

  return (
    <>
      <style>{allStyles}</style>
      <RenderChaiBlocks externalData={{}} blocks={blocks} />
    </>
  );
}

export default Preview;
