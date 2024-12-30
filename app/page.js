'use client'

import { motion } from "framer-motion";
import { useState } from "react";

import styles from "./page.module.css";


let tabs = [
  { id: "Home", label: "Home" },
  { id: "Interactions", label: "Interactions" },
  { id: "Resources", label: "Resources" },
  { id: "Docs", label: "Docs" },
  { id: "Blogs", label: "Blogs" },
];

export default function Home() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={styles.nav}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={styles.button }
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className={styles.bubble}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
