import React from "react";
import type { Home } from "../.tina/__generated__/types";
import { Hero } from "./blocks/Hero/Hero";
import { ImageText50 } from "./blocks/ImageText50/ImageText50";
import { Features } from "./blocks/Features/Features";

export const Blocks = (props: Home) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
          switch (block.__typename) {
            case "HomeBlocksHero":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <Hero data={block} parentField={`blocks.${i}`} />
                </div>
              );
            case "HomeBlocksImageText50":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <ImageText50 data={block} parentField={`blocks.${i}`} />
                </div>
              );
            case "HomeBlocksFeatures":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <Features data={block} parentField={`blocks.${i}`} />
                </div>
              );
            default:
              return null;
          }
        })
        : null}
    </>
  );
};
