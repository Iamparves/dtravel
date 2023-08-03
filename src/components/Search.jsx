import { AiOutlineSearch } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";

const Search = () => {
  return (
    <form className="mx-auto flex w-full max-w-sm flex-col justify-center gap-3 md:max-w-lg lg:max-w-3xl lg:flex-row lg:gap-5">
      <div className="flex grid-cols-[1fr_1fr_auto] flex-col gap-3 rounded-md lg:grid lg:gap-0 lg:divide-x lg:bg-white lg:px-4 lg:py-4">
        <div className="flex items-center gap-2 rounded-md bg-white p-4 lg:py-0">
          <span className="text-xl text-[#AFAEB4]">
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            className="w-full border-none font-inter text-base font-medium leading-none placeholder-[#5E5C68]/50 outline-none"
            placeholder="Search destination"
          />
        </div>
        <div className="flex items-center gap-2 rounded-md bg-white p-4 lg:py-0">
          <span className="text-xl text-[#AFAEB4]">
            <TfiLocationPin />
          </span>
          <input
            type="text"
            className="w-full border-none font-inter text-base font-medium leading-none placeholder-[#5E5C68]/50 outline-none"
            placeholder="C. Location"
          />
        </div>
        <div className="flex items-center gap-2 rounded-md bg-white px-4 py-2 lg:block lg:py-0">
          <span className="text-xl text-[#AFAEB4] lg:hidden">
            <MdPeopleOutline />
          </span>
          <select className="w-full cursor-pointer bg-transparent py-2 text-[#AFAEB4] outline-none">
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} className="text-[#5E5C68]" value={num}>
                {num} Person
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        className="rounded-md bg-[#34A5E4] px-10 py-4 font-inter font-semibold text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
