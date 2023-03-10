import { useEffect, useState } from "react"

import Chart from 'react-google-charts';
import { Metric } from "../Models/Metric";
import { CalcUtils } from "../utils/calc";
import { SortUtils } from "../utils/sort";
import Styles from "../Styles/components/chart.module.scss"

interface IChart {
  data: Metric[],
}
const ChartComponent = (props: IChart) => {

  const [chart, setChart] = useState< (string|number|undefined)[][]>([])
  const options = {
    curveType: "function",
    
  };

  useEffect(()=>{
    setChart(normalizeData(props.data, CalcUtils.sum))
  },[setChart])

  const normalizeData = (data: Metric[], calc:Function) => {
    const filtered = data.filter(
      x => x.amounts != null
    )

    const sorted = SortUtils.dateAsc(filtered);
    const amounts = sorted.map(x => [x.date.toLocaleDateString("en-US"), calc(x.amounts)])

    return [['date', 'amonut'], ...amounts]
  }

  const reset = () => {
    setChart(normalizeData(props.data, CalcUtils.sum))
  }

  const setMax = () => {
    setChart(normalizeData(props.data, CalcUtils.max))
  }

  const setMin = () => {
    setChart(normalizeData(props.data, CalcUtils.min))
  }

  const setMedian = () => {
    setChart(normalizeData(props.data, CalcUtils.median))
  }

  return (
    <>
    <div className={Styles.chartWrapper}>
    <Chart
      chartType="Line"
      width="100%"
      height="40vh"
      data={chart}
      options={options}
    />
    </div>
    <div className="container">
    <h1>Filter your metrics</h1>
    <button onClick={()=>setMax()}>max</button>
    <button onClick={()=>setMedian()}>median</button>
    <button onClick={()=>setMin()}>min</button>
    <button onClick={()=>reset()}>reset</button>
    </div>
    
    </>
  )

}

export default ChartComponent