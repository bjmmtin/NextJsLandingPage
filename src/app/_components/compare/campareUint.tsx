import Link from "next/link";

type Props = {
    children?: React.ReactNode;
    unitname?: string;
    hrefLink?: string;
};
const CompareUint = ({ children, unitname, hrefLink }: Props) => {
    return (
        <div className="px-2 pt-4 mx-3 rounded-xl shadow-xl">
            <div className="text-center mb-2 text-lg font-semibold text-[#52105b]">{unitname}</div>
            <div className="px-20 rounded-xl py-4 mb-6 flex justify-center bg-[#f9f6fb]">{children}</div>
            <a href={hrefLink} className="my-4 flex justify-center text-white bg-theme-green rounded-full text-lg py-3 font-semibold hover:bg-[#368727] ml-4">
                 compare
            </a>
        </div>
    );
}

export default CompareUint;