import accordionsData from "./data";
import Question from "./Question";

const App = () => {
  return (
    <section className='bg-purple-700 min-h-screen flex justify-center items-center'>
      <div className='bg-white shadow-lg max-w-3xl w-full p-6 rounded space-y-6'>
        <h3 className='text-2xl font-bold text-gray-800'>
          Question and Answers <br /> About Login
        </h3>

        <div className='space-y-4 '>
          {accordionsData.map((accordion) => (
            <Question key={accordion.id} {...accordion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
