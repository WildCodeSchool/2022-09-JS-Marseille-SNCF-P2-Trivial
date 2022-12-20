import React from "react";
// import imageAnimal from "../Images/imageAnimal.jpg";
import "./Content.css";
import Card from "./Card";

const Content = () => {
  // const [begin, setBegin] = useState(false);props={setBegin}
  return (
    <div className="content">
      <Card />
    </div>
  );
};

// render() {
//   if (this.state.edit) return <EditForm />
//   return <Display />
// }

export default Content;
