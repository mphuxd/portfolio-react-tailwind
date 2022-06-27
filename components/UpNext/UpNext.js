import React from "react";
import Image from "next/image";
import Link from "next/link";

function UpNext({ text, href, alt }) {
  return (
    <div className='cs-grid-wrapper w-full'>
      <div className='cs-grid'>
        <div className='col-span-full md:col-start-6 lg:col-start-3 lg:col-span-9 xl:col-start-5 xl:col-span-8 2xl:col-start-8 2xl:col-span-4 2xl:text-right max:col-start-9 max:col-span-3 flex flex-col font-accent rounded-md 2xl:p-2 uppercase tracking-tight leading-tight outline-1 hover:outline outline-ruby '>
          <Link href={href} passHref>
            <div className='flex flex-row 2xl:justify-end hover:cursor-pointer w-full '>
              <span className='my-auto'>{text}</span>
              <Image src='/icons/next.svg' width={32} height={32} alt={alt} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpNext;
