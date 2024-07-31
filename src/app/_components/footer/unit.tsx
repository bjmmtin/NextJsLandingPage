type Props = {
    children?: React.ReactNode;
    name?: string;
}
const Unit = ({ children, name }: Props) => {
    return (
        <a href="/" className="bg-white rounded-xl px-2 py-4 m-2 w-[calc(24%-0.75rem)] group border-4 flex border-white gap-3 hover:border-[#55a646]" data-btob-type="conveyancing">
            <p className="">
                {children}
            </p>
            <p className="">
                <p className="text-xl font-bold text-[#52105b]">{name}</p>
                <p className=" group-hover:underline text-[#55a646]">Enquire now</p>
            </p>
        </a>
    );
}

export default Unit;