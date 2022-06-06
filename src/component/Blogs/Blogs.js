import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="px-8">
      <h1 className="text-center text-7xl font-extrabold text-slate-600 mt-10 underline font-serif">
        Q & A
      </h1>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center my-12 py-12 items-center">
        <div className="w-full h-full border-0 answer-section rounded-3xl bg-slate-800 text-white p-4">
          <h3 className="text-3xl font-semibold">What is API?</h3>
          <p className="mt-4">
            Ans: <b>Application programming interface is called as Api.</b> It
            makes a connection between server and application. From application,
            calling Api data and display that on UI is makes a developer's work
            much more easier. Basically Api data is used for giving a better
            performance to the client and provide the data from Api when the
            clients wants or needs them. There are some kind Api like{" "}
            <b>REST API, SOAP API, BROWSER API, IOS/ANDROID API.</b>{" "}
          </p>
          <div className="grid justify-items-center">
            <img className="App-logo" src={require("./logo192.png")} alt="" />
          </div>
        </div>
        <div className="w-full h-full border-0 answer-section rounded-3xl bg-slate-800 text-white p-4">
          <h3 className="text-3xl font-semibold">What is Semantic Tag?</h3>
          <p className="mt-4">
            Ans:{" "}
            <b>
              Semantic Tag is a bunch of core elements that provides the
              information as the looks on a page.{" "}
            </b>{" "}
            For ex: "article" tag contains articles. They just belongs to there
            name kind of information. It also helps on search engine
            optimiazation programms. There are many kind of semantic tags
            exists. "nav", "footer", "main", "section" etc. is the major
            semantic tags that used much than others.
          </p>
          <div className="grid justify-items-center p-2">
            <img className="App-logo" src={require("./logo192.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
