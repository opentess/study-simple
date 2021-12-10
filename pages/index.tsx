import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import "tailwindcss/tailwind.css";

//
import { useState, useEffect } from "react";
import { firestore } from "../lib/firebase";
import EmptyTimerContainer from "../components/EmptyTimerContainer";

const Home: NextPage = () => {
  const [test, setTest] = useState([]);

  const testButton = async () => {
    const querySnapshot = firestore.collection("test");
    querySnapshot.onSnapshot((query) => {
      const items = [];
      query.forEach((doc) => {
        // console.log(doc.id, "->", doc.data());

        items.push(doc.data());
      });
      console.log(items);
      setTest(items);
    });
  };

  useEffect(() => {
    testButton();
    console.log("e");
  }, []);

  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="fullscreen-container">
          <div className="left">
            <EmptyTimerContainer />
            <button onClick={testButton} className="testButton">
              Test
            </button>
          </div>
          <div className="right">
            <div>
              {test.map((obj) => (
                <div>{obj.test}</div>
              ))}
            </div>
          </div>
          {/* <Navbar time={"5"} />
      <Loader show /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
