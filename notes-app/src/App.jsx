import { useState } from "react";

function App() {
  const [title, settitle] = useState("");
  const [detail, setdetail] = useState("");
  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copytask = [...task]
    copytask.push({title,detail})
    settask(copytask)
    console.log(task)
    settitle('')
    setdetail('')

  };

  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    settask(copyTask)
  }

  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        className="flex flex-col gap-5 p-10 lg:w-1/2"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="text-2xl font-bold">Add Notes</h1>
        {/* FIRST INPUT */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 border-2 rounded "
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        {/* SECOND INPUT */}
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 border-2  h-30 rounded"
          value={detail}
          onChange={(e)=>{
            setdetail(e.target.value)
          }}
        />

        <button className="bg-white  text-black rounded py-1">Add Notes</button>
      </form>
      <div className="p-10 lg:w-1/2 ">
        <h1 className="text-2xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-3 h-[90%] mt-5 overflow-auto">
          {task.map(function(elem,idx){
            return <div className="bg-white w-40 h-50 rounded text-black overflow-y-auto flex flex-col justify-between ">
              <div>
              <h3 className="leading-tight text-xl font-bold sticky top-0 bg-white px-3 py-1 ">{elem.title}</h3>
              </div>
              <p className="text-gray-500 font-medium px-3">{elem.detail}</p>
              <button className="bg-red-500 text-white sticky bottom-0 " onClick={()=>{
                deleteNote(idx)
              }}>Delete Note</button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App
