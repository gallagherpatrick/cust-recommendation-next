import Image from "next/image"
import * as React from 'react';
import { deflate } from "zlib";



export default function Header({text, src}){

return <header className="flex mb-[2px] bg-white drop-shadow-md py-2">
    <h1 className="flex grow capitalize ms-4" >{text}</h1>
    <Image
        className="mr-4"
        src={src}
        alt="Picture of next SVG"
        width={48}
        height={48}
    />
    </header>
}

