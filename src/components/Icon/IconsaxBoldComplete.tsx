import React from "react";
import { iconsBold2 } from "@/data/bold";
import { CopyToClipboard } from "react-copy-to-clipboard";

type ArrayKeys<T> = T extends (infer Item)[]
  ? keyof Item
  : T extends object
  ? keyof T
  : never;

const CopyComponent = CopyToClipboard as any;
export type IconsBoldList = ArrayKeys<typeof iconsBold2>;

type IconsaxBoldProps = {
  fillClassName?: string;
  className?: string;
  name: IconsBoldList;
  size?: number | string;
  fill?: string;
};

// const sortObjectAlphabetically = (inputObj: any): any => {
//   const sortedKeys = Object.keys(inputObj).sort();
//   const sortedObj: any = {};
//   for (const key of sortedKeys) {
//     sortedObj[key] = inputObj[key];
//   }
//   return sortedObj;
// };

// sortObjectAlphabetically(icons);

const IconsaxBold2 = ({
  fillClassName,
  className,
  name,
  size,
}: IconsaxBoldProps) => (
  <svg
    className={`inline-block ${className} ${fillClassName}`}
    width={size || 24}
    height={size || 24}
    viewBox='0 0 24 24'
    fill='none'
  >
    {iconsBold2[name]?.map((iconpath: string, index: number) => {
      return (
        <CopyComponent
          key={index}
          text={JSON.stringify(iconsBold2[name])}
          onCopy={() => {
            alert("copied!");
          }}
        >
          <path
            className='cursor-copy'
            fill={fillClassName ? "" : "#000"}
            d={iconpath}
          ></path>
        </CopyComponent>
      );
    })}
  </svg>
);

export default IconsaxBold2;
