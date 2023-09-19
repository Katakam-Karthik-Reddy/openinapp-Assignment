import { Dispatch, SetStateAction } from "react";

interface props {
  setname: Dispatch<SetStateAction<string>>;
  setemail: Dispatch<SetStateAction<string>>;
  setnumber: Dispatch<SetStateAction<string>>;
}
const Basicdetails: React.FC<props> = ({ setname, setemail, setnumber }) => {
  return (
    <div className="w-full px-6">
      <p className="my-2 text-sm font-semibold">Enter Name*</p>
      <input
        type="text"
        placeholder="Eg. Jhon Doe"
        onChange={(e) => {
          setname(e.target.value);
        }}
        className="nameinput h-10 w-full rounded-md border-[1px] border-gray-300 px-4 text-sm"
      />
      <p className="my-2 mt-6 text-sm font-semibold">Enter Email*</p>
      <input
        type="text"
        placeholder="Eg. Jhon@xyz.com"
        onChange={(e) => setemail(e.target.value)}
        className="emailinput h-10 w-full rounded-md border-[1px] border-gray-300 px-4 text-sm"
      />
      <p className="my-2 mt-8 text-sm font-semibold">Enter Phone*</p>
      <input
        type="number"
        placeholder="Eg. 9123456789"
        onChange={(e) => setnumber(e.target.value)}
        className="phoneinput h-10 w-full rounded-md border-[1px] border-gray-300 px-4 text-sm"
      />
    </div>
  );
};

export default Basicdetails;
