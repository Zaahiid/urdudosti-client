import { useState } from "react";

const SampleSher = () => {
  const [isUrdu, setIsUrdu] = useState(true);
  const handleToggle = () => {
    setIsUrdu(!isUrdu);
  };
  const data = [
    {
      poet_name: {
        urdu_name: "علامہ اقبال",
        eng_name: "Allama Iqbal",
      },
      sher: {
        urdu: ["ترے عشق کی انتہا چاہتا ہوں ", "مری سادگی دیکھ کیا چاہتا ہوں "],
        eng: [
          "TERE ISHQ KI INTEHA CHAAHTA HUN",
          "MERI SAADGI DEKH MAIN KYA CHAAHTA HUN",
        ],
      },
    },
  ];
  return (
    <div className="flex flex-col  justify-center items-center mt-40 w-screen">
      

      {isUrdu ? (
        <div className="w-2/3 h-40 border text-center bg-white shadow-md">
          
          <h2 className="mt-8 text-2xl font-medium font-serif">{data[0].sher.urdu[0]}</h2>
          <h2 className="my-3 text-2xl font-medium font-serif">{data[0].sher.urdu[1]}</h2>
          <h2 className="text-2xl font-medium font-serif">{data[0].poet_name.urdu_name}</h2>{" "}
        </div>
      ) : (
        <div className="w-2/3 h-40 border text-center bg-white shadow-md">
          
          <h2 className="mt-8 text-sm md:text-xl font-medium font-serif">{data[0].sher.eng[0]}</h2>
          <h2 className="my-3 text-sm md:text-xl font-medium font-serif">{data[0].sher.eng[1]}</h2>
          <h2 className="text-sm md:text-xl font-medium font-serif">{data[0].poet_name.eng_name}</h2>
        </div>
      )}

      <label className="relative inline-flex items-center cursor-pointer mt-3">
        <input
          type="checkbox"
          defaultValue
          className="sr-only peer"
          checked={isUrdu}
          onClick={handleToggle}
          onChange={handleToggle}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {isUrdu ? "English" : "Urdu"}
        </span>
      </label>
    </div>
  );
};

export default SampleSher;
