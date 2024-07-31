type Props = {
    photo: string;
    name: string;
    job: string;
}
const Member = ({photo, name, job}:Props) => {
    return (
        <li className="py-2 pr-2">
            <a href="/" className=" flex group ">
                <div className="w-[110px] h-[100px] flex items-center justify-center">
                    <img src={photo} alt="" className="w-[90px] h-[90px] group-hover:w-[110px] group-hover:h-[100px]" />
                </div>
                <div className="pl-6">
                    <p className="group-hover:text-[#368727] text-[#55a646] text-lg font-extrabold">  {name}</p>
                    <p className="text-lg">{job}</p>
                </div>
            </a>
        </li>
    );
}
export default Member;