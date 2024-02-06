import "@chaibuilder/sdk/styles";
import "./App.css";
import { ChaiBuilderEditor } from "@chaibuilder/sdk";
import React from "react";

const Logo: React.FC<any> = () => {
  return (
    <a
      href="https://chaibuilder.com"
      target={"_blank"}
      className="flex mx-auto items-center space-x-2 mb-2"
    >
      <span className="block w-fit text-lg font-bold underline">
        This is a demo site
      </span>
    </a>
  );
};

function App() {
  return (
    <>
      <ChaiBuilderEditor
        topBarComponents={{
          left: [Logo],
        }}
        onSaveBrandingOptions={async (arg) => {
          console.log(arg);
          return true;
        }}
        onSavePage={async (arg) => {
          console.log(arg);
          return true;
        }}
      />
    </>
  );
}

export default App;
