import { RenderChaiBlocks } from "@chaibuilder/sdk/render";
import { useAtom } from "jotai";
import { lsBlocksAtom, lsBrandingOptionsAtom } from "./atoms";
import { useEffect, useState } from "react";
import { getStylesForPageData } from "@chaibuilder/sdk/lib";

function Preview() {
  const [blocks] = useAtom(lsBlocksAtom);
  const [brandingOptions] = useAtom(lsBrandingOptionsAtom);
  const [allStyles, setStyles] = useState("");

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
