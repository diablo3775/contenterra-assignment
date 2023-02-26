import React, { useEffect, useState } from "react";
import "./App.css";
import { removeTags,parseHTMLText } from "./utils/helper";

const View = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await fetch("https://www.reddit.com/r/reactjs.json");
      const json = await response.json();
      setData(json.data.children.map((a) => a.data));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="notes-container">
      {data.length === 0 ? (
        <div>Loading...</div>
      ) : (
        data.map((note) => (
          <div key={note.id} className="notes-card">
            <div><span>Title:</span> {note.title}</div>
            <div><span>Score:</span> {note.score}</div>
            <div><span>Url:</span> <a href={note.url} target="_blank">{note.url}</a></div>
            <div><span>SelfText_HTML:</span> {removeTags(parseHTMLText(note.selftext_html))}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default View;
