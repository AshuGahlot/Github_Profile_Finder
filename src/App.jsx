import React, { useEffect, useState } from "react";
import User from "./User";



function App() {
  const [username, setusername] = useState();
  const [userdata, setuserdata] = useState(null);
  const [loading, setloading] = useState(false);

  async function fetchgithub() {
    setloading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const result = await response.json();
    console.log(result);

    if (result) {
      setuserdata(result);
      setloading(false);
      setusername('')
    }
  }

  useEffect(() => {
    fetchgithub();
  }, []);

  function handlesubmit() {
    fetchgithub();
  }
  if (loading) {
    return (
      <div className="mx-auto w-60 font-bold text-center mt-10 bg-slate-200">
        <h2>Loading Data ! Please wait</h2>
      </div>
    );
  }

  return (
    <div className="w-full mt-20 mx-auto h-auto text-center ">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter Github Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          className="w-80 pl-3 text-xl shadow border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div>
          <button onClick={handlesubmit}className="bg-slate-600 hover:bg-slate-800 text-white p-3 rounded-e-xl">Search</button>
        </div>
      </div>
      {userdata !== null ? <User user={userdata}/> :null}
    </div>
  );
}

export default App;
