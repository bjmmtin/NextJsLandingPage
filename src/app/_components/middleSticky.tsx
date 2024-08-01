import Trustpilot from "./trustPilot";

const MiddleSticky = () => {
    return (
        <div className="flex justify-between lg:px-64 py-6 text-white bg-[#52105b]">
            <div className="text-xl ">Used by over 1 million movers in the UK </div>
            <Trustpilot/>
            <div className="text-xl"><strong>Save up to 70%</strong> on the cost of moving</div>
        </div>
    );
}

export default MiddleSticky;