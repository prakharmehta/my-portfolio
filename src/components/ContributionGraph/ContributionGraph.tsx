import { useEffect, useState } from "react";
import styles from "./ContributionGraph.module.css";
import GraphSliders from "../GraphSliders/GraphSliders";

const ContributionGraph = () => {

  const {
    contribution_graph_container,
    contribution_graph,
    cell,
    edit_button,
    edit_contribution_graph_container,
    margin_none
  } = styles

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

  const [showSliders, setShowSliders] = useState(false)

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

  const updateConsistency = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsistency(Number(e.target.value));
  };

  const updateSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(e.target.value));
  };

  const toggleEdit = () => {
    setShowSliders(!showSliders);
  };

  return (
    <div className={contribution_graph_container}>
      <div className={contribution_graph}>
        {contributions.map((color, index) => (
          <div
            key={index}
            className={cell}
            style={{ background: color }}
          />
        ))}
      </div>
      <div className={edit_contribution_graph_container}>
      <button className={"flex " + edit_button} onClick={toggleEdit} title="Edit">
        <span className={margin_none + " material-symbols-outlined"}>
          edit_square
        </span>
        {/* <p>Edit</p> */}
      </button>
      {showSliders && <GraphSliders consistency={consistency} speed={speed} updateConsistency={updateConsistency} updateSpeed={updateSpeed}/>}
      </div>
      
    </div>
  );
};

export default ContributionGraph;
