import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  let description = showInfo ? info : "";
  return (
    <>
      <div>
        <div className='flex justify-between items-center bg-purple-100 px-4 py-2 gap-2 rounded-md border border-gray-400 shodow-lg'>
          <p>{title}</p>
          <button onClick={() => setShowInfo((prevState) => !prevState)}>
            {showInfo ? (
              <FaMinusCircle className=' text-xl hover:scale-110 transition' />
            ) : (
              <FaPlusCircle className=' text-xl hover:scale-110 transition' />
            )}
          </button>
        </div>
        <p className='mt-2 leading-relaxed text-sm text-gray-700'>
          {showInfo ? info : description}
        </p>
      </div>
    </>
  );
};

export default Question;
