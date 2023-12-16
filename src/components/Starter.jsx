import IgLogo from "./IgLogo";

const Starter = () => {
  return (
    <div className="text-center ">
      <h4 className="text-7xl font-semibold text-gray-800 mt-20 md:mt-56 lg:mt-32 my-5">اردو دوستی</h4>
      <h1 className="text-7xl font-semibold text-gray-800  my-5">URDU DOSTI</h1>
      <h3 className="text-xl font-medium my-5 text-gray-600 ">A project for Urdu lovers <span className="inline-block text-3xl animate-bounce ">💖</span></h3>
      <h3 className="text-lg font-bold text-red-800 my-10">
        <span className="animate-pulse">COMING SOON ...</span>😊😇😍
      </h3>
      <h3 className="text-xl text-gray-600 font-medium my-5">Follow Us:</h3>
      <div className="flex items-center justify-center gap-2">

        <IgLogo />
        <h4 className="text-xl font-medium italic text-red-950"><a href="https://www.instagram.com/urdudosti/" target="_blank" rel="noreferrer">@urdudosti</a></h4>
        
      </div>
    </div>
  );
};

export default Starter;
