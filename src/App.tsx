import "@chaibuilder/sdk/styles";
import { ChaiBuilderEditor } from "@chaibuilder/sdk";
import React, { lazy } from "react";
import { useAtom } from "jotai";
import { lsBlocksAtom, lsBrandingOptionsAtom, lsProvidersAtom } from "./atoms";

const Star = lazy(() => import("./Star.tsx"));

const Logo: React.FC = () => {
  return (
    <div className={"font-normal flex items-center text-sm"}>
      This is a demo site. Changes are stored locally. Visit
      <a
        target={"_blank"}
        className="text-orange-500 underline"
        href={"/preview"}
      >
        &nbsp;/preview&nbsp;
      </a>
      to view your page.&nbsp;
      <a
        href={"https://github.com/surajair/demo"}
        target={"_blank"}
        className="text-orange-500 underline"
      >
        Source code
      </a>
      &nbsp; | &nbsp;
      <Star />
    </div>
  );
};

function App() {
  const [blocks, setBlocks] = useAtom(lsBlocksAtom);
  const [brandingOptions, setBrandingOptions] = useAtom(lsBrandingOptionsAtom);
  const [providers, setProviders] = useAtom(lsProvidersAtom);
  return (
    <>
      <ChaiBuilderEditor
        unsplashAccessKey={import.meta.env.VITE_UNSPLASH_ACCESS_KEY}
        topBarComponents={{ left: [Logo] }}
        blocks={blocks}
        dataProviders={providers}
        brandingOptions={brandingOptions}
        onSavePage={async ({ blocks, providers }: any) => {
          setBlocks(blocks);
          setProviders(providers);
          return true;
        }}
        onSaveBrandingOptions={async (options) => {
          setBrandingOptions(options);
          return true;
        }}
      />
    </>
  );
}

export default App;
