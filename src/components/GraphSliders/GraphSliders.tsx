import styles from "./GraphSliders.module.css"

interface GraphSlidersProps {
    consistency: number,
    updateConsistency: React.ChangeEventHandler<HTMLInputElement>,
    speed: number,
    updateSpeed: React.ChangeEventHandler<HTMLInputElement>
}

const GraphSliders: React.FC<GraphSlidersProps> = ({consistency, updateConsistency, speed, updateSpeed}) => {
    const {
        sliders,
        range_slider_container,
        slider_label,
        github_range_slider,
    } = styles
  
    return (
    <div className={sliders}>
    <div className={range_slider_container}>
        <label htmlFor="consistency" className={slider_label}>Consistency</label>
        <input
        className={github_range_slider}
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
      <div className={range_slider_container}>
        <label htmlFor="speed" className={slider_label}>Speed</label>
        <input
        className={github_range_slider}
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
  )
}

export default GraphSliders