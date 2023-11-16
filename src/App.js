import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(process.env.REACT_APP_API + "/user")
      .then((res) => res.json())
      .then((result) => {
        setUser(result.results);
      });
  };

  return (
    <>
      <div className="">
        {user.length > 0
          ? user.map((item) => (
              <ul key={item.id}>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.email}</li>
              </ul>
            ))
          : null}
      </div>
    </>
  );
}

export default App;
