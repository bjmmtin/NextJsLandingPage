const MiddleSticky = () => {
    return (
        <div className="flex justify-center lg:px-64 py-6 text-white bg-[#52105b]">
            <div className="text-xl">Used by over 1 million movers in the UK </div>
            <div className="text-xl">
                <iframe title="Customer reviews powered by Trustpilot" loading="eager" src="https://widget.trustpilot.com/trustboxes/5419b732fbfb950b10de65e5/index.html?templateId=5419b732fbfb950b10de65e5&businessunitId=518ccbb800006400052b40b6#locale=en-GB&styleHeight=24px&styleWidth=100%25&theme=dark"
                style={{position: 'relative', height: '24px', width: '100%', borderStyle: 'none', display: 'block', overflow: 'hidden'}}></iframe>
            </div>
            <div className="text-xl"><strong>Save up to 70%</strong> on the cost of moving</div>
        </div>
    );
}

export default MiddleSticky;