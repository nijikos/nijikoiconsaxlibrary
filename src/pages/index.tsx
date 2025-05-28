import React from "react";
import Head from "next/head";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import IconsaxBold2 from "@/components/Icon/IconsaxBoldComplete";
import Iconsax2 from "@/components/Icon/IconsaxComplete";
import { icons2 } from "@/data/linear";
import { iconsBold2 } from "@/data/bold";
import SolarOutline, { solaroutline } from "@/components/Icon/SolarLinear";

export default function iconsax() {
  let iconNames2 = Object.keys(icons2);
  let iconNamesBold2 = Object.keys(iconsBold2);
  let solaroutlineNames = Object.keys(solaroutline);
  return (
    <div className='bg-n-0 w-full h-full'>
      <Head>
        <title>Iconsax Library</title>
      </Head>
      <TabGroup>
        <TabList className='w-screen fixed top-0 left-0 right-0 shadow-md py-3 px-6 flex gap-4 bg-white'>
          <Tab
            key={"linear"}
            className='rounded-full px-3 py-1 text-sm/6 font-semibold text-gray-900 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-gray-900 data-hover:bg-gray-100 data-selected:bg-gray-200 data-selected:data-hover:bg-gray-200'
          >
            Iconsax
          </Tab>
          <Tab
            key={"bold"}
            className='rounded-full px-3 py-1 text-sm/6 font-semibold text-gray-900 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-gray-900 data-hover:bg-gray-100 data-selected:bg-gray-200 data-selected:data-hover:bg-gray-200'
          >
            Iconsax Bold
          </Tab>
          <Tab
            key={"solaroutline"}
            className='rounded-full px-3 py-1 text-sm/6 font-semibold text-gray-900 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-gray-900 data-hover:bg-gray-100 data-selected:bg-gray-200 data-selected:data-hover:bg-gray-200'
          >
            Solar Outline
          </Tab>
        </TabList>
        <TabPanels className='mt-3'>
          <TabPanel key={"linear"} className='rounded-xl bg-gray-50 p-3'>
            <div className='bg-n-0 w-[1300px] h-full py-16 mx-auto'>
              <p className='body1 font-bold text-center'>
                Total Iconsax Complete From Figma : {iconNames2?.length}
              </p>
              <p className='body1 font-bold text-center'>
                Iconsax&apos;s Complete Icons
              </p>
              <div className='grid grid-cols-5 px-10 py-10 gap-10 place-items-start'>
                {iconNames2?.map((icon: string, index: number) => {
                  return (
                    <div key={index} className='col-span-1 flex flex-row gap-4'>
                      <Iconsax2 name={icon as any} />
                      <p>{icon}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabPanel>

          <TabPanel key={"bold"} className='rounded-xl bg-gray-50 p-3'>
            <div className='bg-n-0 w-[1300px] h-full py-16 mx-auto'>
              <p className='body1 font-bold text-center'>
                Total Iconsax BOLD Complete From Figma :{" "}
                {iconNamesBold2?.length}
              </p>
              <p className='body1 font-bold text-center'>
                Iconsax&apos;s Icons
              </p>
              <div className='grid grid-cols-5 px-10 py-10 gap-10 place-items-start'>
                {iconNamesBold2?.map((icon: string, index: number) => {
                  return (
                    <div key={index} className='col-span-1 flex flex-row gap-4'>
                      <IconsaxBold2 name={icon as any} />
                      <p>{icon}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabPanel>

          <TabPanel key={"solaroutline"} className='rounded-xl bg-gray-50 p-3'>
            <div className='bg-n-0 w-[1300px] h-full py-16 mx-auto'>
              <p className='body1 font-bold text-center'>
                Total Solar Outline Complete From Figma :{" "}
                {solaroutlineNames?.length}
              </p>
              <p className='body1 font-bold text-center'>
                Solar Outline&apos;s Icons
              </p>
              <div className='grid grid-cols-5 px-10 py-10 gap-10 place-items-start'>
                {solaroutlineNames?.map((icon: string, index: number) => {
                  return (
                    <div key={index} className='col-span-1 flex flex-row gap-4'>
                      <SolarOutline name={icon as any} />
                      <p>{icon}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
