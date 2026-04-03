import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`,
    );
    setUserData(response.data);
    // console.log(response.data[0].author)
    console.log(userData);
  };

  useEffect(function () {
    getData();
  }, [index]);
  let printUserData = <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >Loading.....</h3>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 bg-white rounded-xl overflow-auto">
              <img src={elem.download_url} className="h-full object-cover " />
            </div>
            <h2>{elem.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen text-white p-4 overflow-auto">
      
      <div className="flex flex-wrap gap-3 mt-3 h-[85%]">{printUserData}</div>

      <div className="flex gap-3 w-full justify-center font-mono items-center">
        <button
          onClick={() => {
            if(index>1){
              setUserData([])
              setIndex(index-1)
            }
          }}
          className="bg-blue-500 text-shadow-indigo-200 px-4 py-1 text-md font-bold rounded cursor-pointer active:scale-95 "
        >
          Prev
        </button>
        <h1 >Page {index}</h1>
        <button 
          onClick={() => {
            setUserData([])
            setIndex(index+1)
          }} 
          className="bg-blue-500 text-shadow-indigo-200 px-4 py-1 text-md font-bold rounded cursor-pointer active:scale-95">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
