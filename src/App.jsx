import { useState } from "react";

import "./App.css";
import { data } from "./data";
import Card from "./components/Card";

function App() {
  const [list, setList] = useState(data);
  const [show, setShow] = useState(-1);

  console.log(list);
  return (
    <div className="bg-slate-800 min-h-screen">
      <h1 className="text-center text-white text-2xl">Accordion</h1>
      <div className="max-w-2xl mx-auto flex flex-col gap-5 mt-11">
        {list.map((item, index) => (
          <Card
            item={item}
            key={item.id}
            index={index}
            condition={index === show}
            setShow={setShow}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
