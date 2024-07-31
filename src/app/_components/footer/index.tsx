import Container from "@/app/_components/container";
import Unit from "./unit";

export function Footer() {

  return (
    <div>

      <div className="py-12 bg-gradient-to-b from-[#52105b] to-[#661373]">
        <Container>
          <div className="mb-8 2xl:mx-64 text-white text-center w-[100%]">
            <h2 className="text-4xl font-extrabold"> Win Work With Compare My Move</h2>
            <p className="text-2xl"> Are you a reputable conveyancing, removal or surveying company? Join our network to start growing your business</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center ">
            <Unit name="Conveyancing" >
              <svg fill="none" stroke="#52105b" stroke-width="2" className="h-[40px] w-[40px]" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 0 1 2 2m4 0a6 6 0 0 1-7.743 5.743L11 17H9v2H7v2H4a1 1 0 0 1-1-1v-2.586a1 1 0 0 1 .293-.707l5.964-5.964A6 6 0 1 1 21 9z"></path>
              </svg>
            </Unit>
            <Unit name="Surveying" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#52105b" stroke-width="2" className="h-[40px] w-[40px]" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </Unit>
            <Unit name="House Removals" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#52105b" stroke-width="2" className="h-[40px] w-[40px]" viewBox="0 0 24 24">
                <path d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1m8-1a1 1 0 0 1-1 1H9m4-1V8a1 1 0 0 1 1-1h2.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V16a1 1 0 0 1-1 1h-1m-6-1a1 1 0 0 0 1 1h1M5 17a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m6 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0"></path>
              </svg>
            </Unit>
            <Unit name="International Removals" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#52105b" stroke-width="2" className="h-[40px] w-[40px]" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.945M8 3.935V5.5A2.5 2.5 0 0 0 10.5 8h.5a2 2 0 0 1 2 2 2 2 0 1 0 4 0 2 2 0 0 1 2-2h1.064M15 20.488V18a2 2 0 0 1 2-2h3.064M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
              </svg>
            </Unit>
            <Unit name="Small Move" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 39" className="h-[40px] w-[40px]">
                <g fill="none" fill-rule="evenodd" stroke="#52105B">
                  <g stroke-width="2.75">
                    <path stroke-linecap="round" d="M31.5 37h8"></path>
                    <path d="M35.5 10.5v26M32.604 2h5.792a2 2 0 0 1 1.952 1.566l1.111 5A2 2 0 0 1 39.507 11h-8.014a2 2 0 0 1-1.952-2.434l1.111-5A2 2 0 0 1 32.604 2Z"></path>
                  </g>
                  <g stroke-width="2.757">
                    <path d="M13.379 10.263h5.837a3.613 3.613 0 0 1 3.614 3.614v18.29H9.765v-18.29a3.613 3.613 0 0 1 3.614-3.614Z"></path>
                    <path d="M5.883 17.372c2.144 0 3.882 1.675 3.882 3.743l-.001-.044.001 11.097H6.01a.903.903 0 0 1-.903-.904v-6.481C3.334 24.436 2 22.926 2 21.115c0-2.068 1.738-3.743 3.883-3.743ZM26.712 17.372c-2.144 0-3.882 1.675-3.882 3.743l.001-.044-.001 11.097h3.755a.903.903 0 0 0 .904-.904v-6.481c1.772-.347 3.106-1.857 3.106-3.668 0-2.068-1.738-3.743-3.883-3.743Z"></path>
                    <path d="M13.265 25.298h6.065a3.5 3.5 0 0 1 3.5 3.5v3.5H9.765v-3.5a3.5 3.5 0 0 1 3.5-3.5Z"></path>
                    <path d="M7.299 32.168h4.933v3.929a.903.903 0 0 1-.903.903H8.202a.903.903 0 0 1-.903-.903v-3.93ZM20.363 32.168h4.933v3.929a.903.903 0 0 1-.903.903h-3.127a.903.903 0 0 1-.903-.903v-3.93Z"></path>
                  </g>
                </g>
              </svg>
            </Unit>
            <Unit name="Storage" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#52105B" stroke-width="2" className="h-[40px] w-[40px]" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 1 1 0-4h14a2 2 0 1 1 0 4M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8m-9 4h4"></path>
              </svg></Unit>
            <Unit name="House Clearance" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#52105B" stroke-width="2" className="h-[40px] w-[40px]" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"></path></svg></Unit>
            <Unit name="Commercial Removals" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#52105B" className="h-[40px] w-[40px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path>
              </svg></Unit>
          </div>
        </Container>
      </div>
      <div className="py-8 bg-[#52105b] text-white ">
        <Container>
          <div className="mx-3 flex justify-between w-[100%] border-b border-[rgba(38,38,38,75)]">
            <div className="w-[calc(25%-0.75rem)]">
              <p className="text-lg font-bold mb-2">Compare & Save</p>
              <p className="mb-2"><a href="/">Compare Conveyancers</a></p>
              <p className="mb-2"><a className="" href="/">Compare Property Surveyors</a></p>
              <p className="mb-2"><a className="" href="/">Compare Removal Companies</a></p>
              <p className="mb-2"><a className="" href="/">Compare Storage</a></p>
              <p className="mb-2"><a className="" href="/">Compare House Clearance</a></p>
              <p className="mb-2"><a className="" href="/">Compare International Removals</a></p>
              <p className="mb-2"><a className="" href="/">Compare Commercial Companies</a></p>
              <p className="mb-2"><a href="/">Retrieve Quotes</a></p>
            </div>
            <div className="w-[calc(19%-0.75rem)]">
              <p className="text-lg font-bold mb-2">Advice</p>
              <p className="mb-2"><a href="/">Conveyancing</a></p>
              <p className="mb-2"><a className="" href="/">Surveying</a></p>
              <p className="mb-2"><a className="" href="/">House Removals</a></p>
              <p className="mb-2"><a className="" href="/">Storage</a></p>
              <p className="mb-2"><a className="" href="/">House Clearance</a></p>
              <p className="mb-2"><a className="" href="/">Commercial</a></p>
              <p className="mb-2"><a className="" href="/">Areat Guides</a></p>
            </div>
            <div className="w-[calc(19%-0.75rem)]">
              <p className="text-lg font-bold mb-2">Find Out More</p>
              <p className="mb-2"><a href="/">About Us</a></p>
              <p className="mb-2"><a className="" href="/">Reviews</a></p>
              <p className="mb-2"><a className="" href="/">Verification Process</a></p>
              <p className="mb-2"><a className="" href="/">Contact Us</a></p>
              <p className="mb-2"><a className="" href="/">Careers</a></p>
              <p className="mb-2"><a className="" href="/">Meet The Team</a></p>
              <p className="mb-2"><a className="" href="/">Press And Media</a></p>
            </div>
            <div className="w-[calc(19%-0.75rem)]">
              <p className="text-lg font-bold mb-2">Become A Partner</p>
              <p className="mb-2"><a href="/">Our Services</a></p>
              <p className="mb-2"><a className="" href="/">How It Works</a></p>
              <p className="mb-2"><a className="" href="/">How Are We Different</a></p>
              <p className="mb-2"><a className="" href="/">Case Studies</a></p>
              <p className="mb-2"><a className="" href="/">Offers</a></p>
              <p className="mb-2"><a className="" href="/">Help Centre</a></p>
            </div>
            <div className="w-[calc(19%-0.75rem)]">
              <p className="text-lg font-bold mb-2">Legal</p>
              <p className="mb-2"><a href="/">Terms & Conditions</a></p>
              <p className="mb-2"><a className="" href="/">Privacy Policy</a></p>
              <p className="mb-2"><a className="" href="/">Company Information</a></p>
              <p className="mb-2"><a className="" href="/">Sitemap</a></p>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#52105b] pb-40">
        <div className="2xl:mx-60 flex">
          <div className="text-white px-3">
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 489.4 64.2" viewBox="0 0 489.4 64.2"><path d="M27.4 54.8" fill="#fff"></path><g>
                <path d="M94 26.7c4.5 0 7.1 1.8 9.2 4.4l-1.9 1.7c-1.9-2.6-4.3-3.6-7.1-3.6-6.1 0-9.8 4.9-9.8 11.1 0 6.3 3.7 11.2 9.8 11.2 2.9 0 5.2-1.1 7.1-3.7l1.9 1.7c-2.1 2.7-4.7 4.5-9.2 4.5-7.7 0-12.7-6.1-12.7-13.7 0-7.5 5-13.6 12.7-13.6zM108 40.4c0-7.6 4.9-13.7 12.5-13.7 7.7 0 12.6 6.1 12.6 13.7s-4.9 13.7-12.6 13.7c-7.6 0-12.5-6.1-12.5-13.7zm22.1 0c0-5.8-3.4-11.1-9.6-11.1-6.1 0-9.5 5.4-9.5 11.1 0 5.8 3.5 11.2 9.5 11.2 6.2 0 9.6-5.3 9.6-11.2zM171.5 35.2c0-3.7-1.6-5.9-5.2-5.9-2.8 0-6 2.1-7.5 4.4v19.8h-2.9V35.2c0-3.7-1.5-5.9-5.2-5.9-2.8 0-5.9 2.1-7.5 4.5v19.7h-2.8V27.4h2.8v3.9c1.1-1.7 4.6-4.6 8.4-4.6 4.1 0 6.2 2.4 6.9 4.9 1.5-2.4 5-4.9 8.7-4.9 4.8 0 7.1 2.7 7.1 7.9v18.8h-2.8V35.2zM183 63.4v-36h2.8v4.1c1.8-2.6 5.2-4.8 9.1-4.8 7 0 11.7 5.3 11.7 13.7 0 8.3-4.7 13.7-11.7 13.7-3.7 0-7-1.9-9.1-4.9v14.2H183zm11.4-34.1c-3.6 0-7.1 2.2-8.6 4.6v12.9c1.5 2.5 5 4.8 8.6 4.8 5.8 0 9.1-4.9 9.1-11.2s-3.2-11.1-9.1-11.1zM230.4 50.4c-2.3 2.5-5.2 3.7-8.9 3.7-4.5 0-9.1-3.1-9.1-8.7 0-5.7 4.6-8.6 9.1-8.6 3.6 0 6.6 1.2 8.9 3.7v-5.3c0-3.9-3.1-6-7-6-3.2 0-5.8 1.1-8.2 3.8l-1.6-1.9c2.7-2.9 5.7-4.4 10.1-4.4 5.3 0 9.5 2.5 9.5 8.4v18.4h-2.8v-3.1zm0-7.8c-1.8-2.4-4.8-3.6-7.9-3.6-4.3 0-7.1 2.8-7.1 6.5s2.8 6.4 7.1 6.4c3.1 0 6.1-1.2 7.9-3.6v-5.7zM242 27.4h2.8v4.5c2.2-2.9 5.2-5 8.8-5v3c-.5-.1-.9-.1-1.4-.1-2.6 0-6.2 2.4-7.4 4.6v19H242v-26zM270.2 26.7c7.9 0 12.3 6.3 12.3 13.8v.8h-21.8c.3 5.7 4.1 10.4 10.2 10.4 3.3 0 6.3-1.2 8.5-3.6l1.5 1.8c-2.6 2.7-5.9 4.2-10.2 4.2-7.6 0-13.1-5.7-13.1-13.7 0-7.6 5.4-13.7 12.6-13.7zm-9.5 12.4h19c-.1-4.4-3-9.9-9.5-9.9-6.2 0-9.3 5.4-9.5 9.9zM320.9 35.2c0-3.7-1.6-5.9-5.2-5.9-2.8 0-6 2.1-7.5 4.4v19.8h-2.9V35.2c0-3.7-1.5-5.9-5.2-5.9-2.8 0-5.9 2.1-7.5 4.5v19.7h-2.8V27.4h2.8v3.9c1.1-1.7 4.6-4.6 8.4-4.6 4.1 0 6.2 2.4 6.9 4.9 1.5-2.4 5-4.9 8.6-4.9 4.8 0 7.1 2.7 7.1 7.9v18.8h-2.8V35.2h.1zM333.5 61.6c1.7 0 2.9-.7 3.9-3.2l2.1-4.6-11-26.3h3.1l9.5 22.8 9.4-22.8h3.2l-13.5 31.8c-1.4 3.3-3.6 4.9-6.7 4.9-.9 0-2.1-.2-2.8-.4l.5-2.6c.6.2 1.6.4 2.3.4zM390 37.6c0-2-1-3.5-3.5-3.5-2.3 0-3.9 1.5-4.7 2.5v16.9h-8.3V37.6c0-2-.9-3.5-3.5-3.5-2.2 0-3.8 1.5-4.6 2.5v16.9h-8.3V27.4h8.3v3.2c1.1-1.5 4.5-3.8 8.6-3.8 3.7 0 6.3 1.6 7.4 4.6 1.5-2.3 4.9-4.6 9-4.6 4.8 0 7.8 2.5 7.8 7.8v18.9H390V37.6zM402.7 40.4c0-7.4 5.4-13.7 14.2-13.7 9 0 14.3 6.3 14.3 13.7s-5.3 13.7-14.3 13.7c-8.9 0-14.2-6.3-14.2-13.7zm19.9 0c0-3.5-2.1-6.3-5.7-6.3s-5.6 2.9-5.6 6.3c0 3.5 2 6.4 5.6 6.4 3.7 0 5.7-2.9 5.7-6.4zM432 27.4h8.8l5.9 16.5 5.9-16.5h8.8l-10.3 26.1h-8.9L432 27.4zM476 26.7c7.7 0 13.4 5.7 13.4 14.5V43h-18.6c.5 2.4 2.8 4.6 6.6 4.6 2.3 0 4.9-.9 6.4-2.2l3.5 5.2c-2.6 2.3-6.9 3.5-10.9 3.5-8.1 0-14.3-5.2-14.3-13.7 0-7.6 5.8-13.7 13.9-13.7zm-5.3 11h10.8c-.2-1.8-1.6-4.5-5.4-4.5-3.7 0-5.1 2.6-5.4 4.5zM58.5 22.1l-24.2-21C32.5-.4 29.9-.5 28.1 1L1.9 22C.7 22.9 0 24.3 0 25.8v18.9C0 54.3 7.8 62 17.3 62h11.5c-3.3-2.7-5.6-6.1-7-9.7h-4.5c-4.2 0-7.7-3.4-7.7-7.7V28.1l21.2-17L50.3 28v16.6c0 4.2-3.4 7.7-7.7 7.7s-7.7-3.4-7.7-7.7V39c0-1.6-.8-3-2-3.9-.1-.1-.3-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.3-.1-.4-.2-.1-.1-.3-.1-.5-.1-.1 0-.2-.1-.3-.1-.3-.1-.6-.1-.9-.1-2.6 0-4.8 2.2-4.8 4.8v5.6c0 .9.1 1.8.2 2.7 0 .2.1.3.1.5v.1c0 .1.1.3.1.4v.1c.1.4.2.8.4 1.3v.1c.1.2.2.4.2.7l.6 1.5c1.1 2.4 2.9 4.9 5.8 6.8 2.5 1.6 5.7 2.8 9.9 3 9.7.1 17.4-7.6 17.4-17.1V25.8c.1-1.5-.5-2.8-1.5-3.7z" fill="#fff"></path></g></svg>
              <span className="">Compare My Move</span>
            </a>
          </div>
          <div className="text-white text-sm clear-right w-[100%] ">
            <div className="site-footer__address text-right">
              Compare My Move 33 - 35 Cathedral Rd, Cardiff, CF11&nbsp;9HB</div>
            <div className="text-right">
              © Copyright Compare My Move 2024</div>
            <div className="site-footer__social-icons text-right">
              <a href="/" className="px-2" target="_blank" rel="nofollow noreferrer">Facebook</a>|
              <a href="/" className="px-2" target="_blank" rel="nofollow noreferrer">Twitter</a>|
              <a href="/" className="pl-2" target="_blank" rel="nofollow noreferrer">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 bg-gradient-to-r shadow-xl text-white from-[#52105b] to-[#914099] w-[100%] text-center fixed bottom-0 z-50">
        <p className="sticky-bar__service__intro">Our users <strong>save up to £700</strong> on their home move!</p>
        <a href="/" className="underline">
          <span className="sticky-bar__service__link__desk">Compare and save on your move today</span>
          <span className="sticky-bar__service__link__mob">Save now</span>
        </a></div>
    </div>
  );
}

export default Footer;
