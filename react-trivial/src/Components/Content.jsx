import React from "react";
import "./Content.css";
import Card from "./Card";

const Content = ({ setBegin }) => {
  // const [begin, setBegin] = useState(false);props={setBegin}
  const beginGame = () => setBegin(true);
  console.log("test : ", setBegin);
  return (
    <div className="content">
      <Card setBegin={setBegin} />
      <button onClick={beginGame}>Begin</button>;
    </div>
  );
};

// render() {
//   if (this.state.edit) return <EditForm />
//   return <Display />
// }

export default Content;
