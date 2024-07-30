const MiddleHeader = () => {
    return (
        <div className="py-6 2xl:px-64 flex justify-center text-center bg-[#f7f7f7]">
            <span className="pt-4 text-center">As seen in:</span>
            <a className="mx-6" href="/"> <img src="/assets/img/compare-the-market.png" alt="Compare The Market" width={180} height={60} /></a>
            <a className="mx-6"  href="/"><img src="/assets/img/lloyds-bank.png" alt="Lloyds Bank" width={180} height={60} /></a>
            <a className="mx-6" href="/"><img src="/assets/img/the-times.png" alt="The Times" width={190} height={60} /></a>
            <a className="mx-6" href="/"><img src="/assets/img/barclays.png" alt="Barclays" width={172} height={60} /></a>
            <a className="mx-6" href="/"><img src="/assets/img/money-saving-expert.png" alt="Money Saving Expert" width={200} height={60} /></a>
        </div>
    );
}
export default MiddleHeader;