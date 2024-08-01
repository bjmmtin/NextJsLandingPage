"use client";
import { useState } from "react";

type Prop = {
    itemName?: string;
    children?: React.ReactNode;
}
const MenuItem = ({ itemName, children }: Prop) => {
    const [visible, setVisivle] = useState(false);
    return (
        <div onMouseLeave={()=>setVisivle(false)} onMouseEnter={() => setVisivle(true)} className="group flex ">
            <button  className="text-[#52105b] hover:bg-[#f4ecf5] rounded-full flex justify-between px-4 py-2 mb-1  w-[100%] ">
                {itemName}
                <svg viewBox="0 0 320 512" className="w-[10px] mt-1" fill="#52105B" >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                </svg>
            </button>

            {visible && children}

        </div>
    );
}
export default MenuItem;