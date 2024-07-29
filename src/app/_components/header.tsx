import Link from "next/link";
import Container from "./container";

const Header = () => {
  return (
    <div className="flex justify-between items-center lg:px-64 lg:py-2">
      <Link href="/">
        <img width={216} height={30} src="https://www.comparemymove.com/assets/img/svg/logo.svg" alt="Compare My Move logo" />
      </Link>

      <div className="flex items-center">
        <Link href="/" className="text-theme-green font-semibold text-lg hover:underline">
          partner login
        </Link>

        <button className="text-white bg-theme-green rounded-full text-lg px-7 py-3 font-semibold hover:bg-[#368727] ml-4">become a partner</button>

        <button className="text-theme-green font-semibold text-5xl bg-[#f7f7f7] hover:bg-gray-300 rounded-full p-4">
          <svg viewBox="0 0 22 22" width={24} height={24}><path fill="none" fill-rule="evenodd" stroke="#52105B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m20 20-6-6m2-5A7 7 0 1 1 2 9a7 7 0 0 1 14 0Z"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
