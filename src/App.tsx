import "@chaibuilder/sdk/styles";
import { ChaiBuilderEditor } from "@chaibuilder/sdk";
import React from "react";
import { useAtom } from "jotai";
import { lsBlocksAtom, lsBrandingOptionsAtom, lsProvidersAtom } from "./atoms";

const Logo: React.FC = () => {
  return (
    <div className={"font-normal text-sm"}>
      This is a demo site. Changes are stored locally. Visit
      <a
        target={"_blank"}
        className="text-orange-500 underline"
        href={"/preview"}
      >
        /preview
      </a>
      to view your page
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
        topBarComponents={{ left: [Logo] }}
        blocks={blocks}
        dataProviders={providers}
        brandingOptions={brandingOptions}
        onSavePage={async ({ blocks, providers }) => {
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
