import React from "react";
import { twMerge } from "tailwind-merge";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { icons2 } from "@/data/linear";

type ArrayKeys<T> = T extends (infer Item)[]
  ? keyof Item
  : T extends object
  ? keyof T
  : never;
const CopyComponent = CopyToClipboard as any;

export type IconsList = ArrayKeys<typeof icons2>;

// const sortObjectAlphabetically = (inputObj: any): any => {
//   const sortedKeys = Object.keys(inputObj).sort();
//   const sortedObj: any = {};
//   for (const key of sortedKeys) {
//     sortedObj[key] = inputObj[key];
//   }
//   return sortedObj;
// };

// sortObjectAlphabetically({ icons2 });

type IconsaxProps = {
  id?: string;
  pathId?: string;
  className?: string;
  pathClassName?: string;
  name: IconsList;
  size?: number | string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  strokeClassName?: string;
  style?: any;
};

const Iconsax2 = ({
  id = "",
  pathId = "",
  className = "",
  pathClassName = "",
  name,
  size,
  strokeWidth,
  strokeClassName,
  style,
}: IconsaxProps) => (
  <svg
    id={id}
    className={twMerge(
      `inline-block stroke-inherit`,
      className,
      strokeClassName ? strokeClassName : "stroke-black"
    )}
    width={size || 24}
    height={size || 24}
    viewBox='0 0 24 24'
    fill='none'
  >
    {icons2[name]?.map((iconpath: string, index: number) => {
      return (
        <CopyComponent
          key={index}
          text={`"${name}" : ${JSON.stringify(icons2[name])}`}
          onCopy={() => {
            alert("copied!");
          }}
        >
          <path
            id={pathId}
            d={iconpath}
            stroke={strokeClassName ? "" : "#000"}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={strokeWidth || 1.5}
            className={twMerge("cursor-copy stroke-inherit", pathClassName)}
            style={style}
          ></path>
        </CopyComponent>
      );
    })}
  </svg>
);

export default Iconsax2;
