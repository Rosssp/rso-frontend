import React, { useState } from "react";
import styles from "./ListSomeSquadCard.module.css";
import squad from "../../constants/squad";
import SquadCard from "../../components/UI/cards/squadCard/SquadCard";

export const ListSomeSquadCard = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {open
                ? squad.list.map((item, index) => (
                      <SquadCard {...item} key={index} />
                  ))
                : squad.list
                      .slice(0, 3)
                      .map((item, index) => (
                          <SquadCard {...item} key={index} />
                      ))}
            <button
                className={styles.button}
                onClick={() => setOpen((prev) => !prev)}
            >
                {open ? "Скрыть" : "Показать еще"}
            </button>
        </>
    );
};
