import { useEffect, useState } from "react";
import styles from "./ContributionGraph.module.css";

const ContributionGraph = () => {
  const rows = 7;
  const cols = 52;

  const [contributions, setContributions] = useState(
    Array(rows * cols).fill(false)
  );
  const [currentColumn, setCurrentColumn] = useState(0);
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [consistency, setConsistency] = useState(0.4);
  const [speed, setSpeed] = useState(0.4)
  const greenColors = ["#39d353", "#006d32", "#0e4429", "#26a641"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentColumn < cols && currentRowIndex < rows) {
        const shouldFill = Math.random() < consistency;

        if (shouldFill) {
          const updatedContributions = [...contributions];
          const index = currentRowIndex * cols + currentColumn;
          const randomColorIndex = Math.floor(
            Math.random() * greenColors.length
          );
          updatedContributions[index] = greenColors[randomColorIndex];
          setContributions(updatedContributions);
        }

        if (currentRowIndex < rows - 1) {
          setCurrentRowIndex(currentRowIndex + 1);
        } else {
          setCurrentRowIndex(0);
          setCurrentColumn(currentColumn + 1);
        }
      } else {
        setContributions(Array(rows * cols).fill(null));
        setCurrentColumn(0);
        setCurrentRowIndex(0);
      }
    }, 50/speed);

    return () => clearInterval(intervalId);
  }, [currentColumn, currentRowIndex, contributions, cols, rows, greenColors, speed]);

  const updateConsistency = (e: any) => {
    setConsistency(e.target.value);
  };

  const updateSpeed = (e: any) => {
    setSpeed(e.target.value);
  };

  return (
    <>
      <div className={styles.contribution_graph}>
        {contributions.map((color, index) => (
          <div
            key={index}
            className={styles.cell}
            style={{ background: color }}
          />
        ))}
      </div>
      <div className={styles.sliders}>
    <div className={styles.range_slider_container}>
        <label htmlFor="consistency">Consistency</label>
        <br />
        <input
        className={styles.github_range_slider}
          type="range"
          id="consistency"
          name="consistency"
          step="0.1"
          min="0.1"
          max="1"
          onChange={updateConsistency}
          value={consistency}
        />
      </div>
      <div className={styles.range_slider_container}>
        <label htmlFor="speed">Speed</label>
        <br />
        <input
        className={styles.github_range_slider}
          type="range"
          id="speed"
          name="speed"
          step="0.1"
          min="0.1"
          max="1"
          onChange={updateSpeed}
          value={speed}
        />
      </div>
    </div>
    </>
  );
};

export default ContributionGraph;
