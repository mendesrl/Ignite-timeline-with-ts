//jsx = js + xml

import { useState } from "react";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mendesrl.png",
      name: "Larissa Mendes",
      role: "Front end",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-07 22:14:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/palhanojean.png",
      name: "Jean Karlo",
      role: "Videomaker",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-07 22:14:00"),
  },
];

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
      {/* > */}
    </div>
  );
}
