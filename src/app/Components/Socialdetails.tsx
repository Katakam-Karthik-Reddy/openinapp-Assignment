import { Dispatch, SetStateAction } from "react";

interface props {
  setinstagram: Dispatch<SetStateAction<string>>;
  setyoutube: Dispatch<SetStateAction<string>>;
}
const Socialdetails: React.FC<props> = ({ setinstagram, setyoutube }) => {
  return (
    <div className="w-full px-6">
      <div className="my-2 flex flex-row">
        <p className="text-sm font-semibold">Instagram Link </p>
        <p className="text-sm font-light text-gray-400">(Optional)</p>
      </div>
      <input
        type="text"
        placeholder="Eg. ..instagram.com/username"
        onChange={(e) => setinstagram(e.target.value)}
        className="instagraminput h-10 w-full rounded-md border-[1px] border-gray-300 px-4 text-sm"
      />
      <div className="my-4 flex flex-row">
        <p className="text-sm font-semibold">Youtube Link</p>
        <p className="text-sm font-light text-gray-400">(Optional)</p>
      </div>
      <input
        type="text"
        placeholder="Eg. Jhon@xyz.com"
        onChange={(e) => setyoutube(e.target.value)}
        className="youtubeinput h-10 w-full rounded-md border-[1px] border-gray-300 px-4 text-sm"
      />
    </div>
  );
};

export default Socialdetails;
