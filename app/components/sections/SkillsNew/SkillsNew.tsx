"use client";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import SkillInterface from "../../../interfaces/SkillInterface";
import Skill from "./Skill/Skill";
import { motion, AnimatePresence } from "framer-motion";
import { HashLoader } from "react-spinners";
import { Hash } from "crypto";
import { desc } from "framer-motion/client";

export default function SkillsNew() {
  const [skills, setSkills] = useState<SkillInterface[]>([]);
  const [skillsResponseStatus, setSkillsResponseStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyQMKiZYOP2ohUwUOvWAksRGae5GAACU8yB_9_5jDNKR-Xq93BlplV1BHtCqTB9GaXBSQ/exec"
      );
      const data = await response.json();
      const formattedData = data.data.map((item: any) => ({
        name: item["Nom"],
        type: item["Type"],
        mastery: item["Maitrise"],
        yearsOfExperience: item["Années d'exp."],
        imageUrl: item["Image"],
        description: item["Description"],
        documentationUrl: item["Lien Documentation"],
      }));
      setSkills(formattedData);
      setSkillsResponseStatus(data.statusText);
    };
    fetchSkills();
  }, []);

  useEffect(() => {
    if (skillsResponseStatus === "success" && skills.length > 0) {
      setLoading(false);
    }
  }, [skills]);

  return (
    <section id="skills" className={style.skillsnew}>
      <h2 className={style.title}>
        MES <span>COMPÉTENCES</span>
      </h2>
      <div className={style.skillsnew_container}>
        {loading ? (
          <HashLoader color="2feaa8" loading={true} size={120} />
        ) : (
          <AnimatePresence>
            {skills.map((skill: SkillInterface, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Skill skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
