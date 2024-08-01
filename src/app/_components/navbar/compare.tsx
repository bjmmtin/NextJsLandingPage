type Prop = {
    str1?: string;
    str2?: string;
}
import Trustpilot from "../trustPilot";
const Compare = ({ str1, str2 }: Prop) => {
    return (
        <div className="max-w-[37%] h-[100%] py-10 px-10 flex flex-col justify-center  bg-[#f4ecf5]">
            <svg viewBox="0 0 29 30" className="w-[2rem] mb-[1rem]">
                <path fill="#52105B" fill-rule="nonzero" d="M28.27 10.717 16.575.568c-.87-.724-2.126-.773-2.996-.048L.92 10.67A2.289 2.289 0 0 0 0 12.505v9.134C0 26.28 3.77 30 8.36 30h5.557a11.33 11.33 0 0 1-3.382-4.688H8.36a3.723 3.723 0 0 1-3.72-3.721v-7.974L14.883 5.4l9.423 8.168v8.022a3.723 3.723 0 0 1-3.72 3.721 3.692 3.692 0 0 1-3.722-3.721v-2.706c0-.774-.386-1.45-.966-1.885-.049-.048-.145-.097-.194-.145-.048-.048-.096-.048-.144-.097-.049-.048-.145-.048-.194-.096-.048-.049-.145-.049-.241-.049-.049 0-.097-.048-.145-.048-.145-.048-.29-.048-.435-.048-1.257 0-2.32 1.063-2.32 2.32v2.706c0 .435.048.87.097 1.305 0 .096.048.144.048.241v.048c0 .049.048.145.048.194v.048c.049.193.097.387.194.628v.049c.048.096.096.193.096.338l.29.725a7.718 7.718 0 0 0 2.803 3.286c1.208.773 2.755 1.353 4.784 1.45 4.688.048 8.409-3.673 8.409-8.264v-9.086a2.174 2.174 0 0 0-.725-1.788Z"></path>
            </svg>
            <div className="text-[#52105b] mb-4 mt-0 font-[800] text-[1.25rem]">{str1}</div>
            <div className="text-[#52105b] mb-4 mt-0 font-[400] text-[1.25rem]">{str2}</div>
            <a className="bg-[#55a646] text-white rounded-full py-4 px-6 mb-4 text-[1rem] font-[600] text-center" href="/">compare now</a>
            <a className="text-lg text-black flex items-center " href="/">
                <Trustpilot />
            </a>
        </div>
    );
}
export default Compare;