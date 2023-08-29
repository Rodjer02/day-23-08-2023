import "./index.css";
import FromThisCurrency from "./components/FromThisCurrency/FromThisCurrency";
import InThisCurrency from "./components/InThisCurrency/InThisCurrency";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { fetchCourseData } from "./lib/fetchCourseData";
function App() {
  const [currencies, setCurrencies] = useState({});
  const [courses, setCourses] = useState([]);
  const [activeBtnOut, setActiveBtnOut] = useState([]);
  const [activeBtnIn, setActiveBtnIn] = useState([]);

  const [courseInputIn, setCourseInputIn] = useState("1");
  const [courseInputOut, setCourseInputOut] = useState("1");

  useEffect(() => {
    setActiveBtnIn(courses[0]);
    setActiveBtnOut(courses[0]);
  }, [courses]);

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await fetchCourseData();
      const newCourses = Object.keys(courseData.rates);
      setCourses(newCourses);
      setCurrencies(courseData.rates);
    };
    fetchData();
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="convertor">
        <FromThisCurrency
          activeBtnOut={activeBtnOut}
          courses={courses}
          currencies={currencies}
          setCurrencies={setCurrencies}
          setActiveBtnOut={setActiveBtnOut}
          activeBtnIn={activeBtnIn}
          setActiveBtnIn={setActiveBtnIn}
          courseInputIn={courseInputIn}
          setCourseInputIn={setCourseInputIn}
          setCourseInputOut={setCourseInputOut}
        />
        <InThisCurrency
          courses={courses}
          activeBtn={activeBtnIn}
          setActiveBtn={setActiveBtnIn}
          currencies={currencies}
          setCurrencies={setCurrencies}
          courseInputOut={courseInputOut}
        />
      </div>
      <Button colorScheme="blue">Button</Button>
    </div>
  );
}

export default App;
