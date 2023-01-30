import { Metric } from './../Models/Metric';


export const SortUtils =  {
  dateDesc(arr:Metric[]): Metric[]{
    return arr.sort((a: Metric, b: Metric) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
  },
  dateAsc(arr:Metric[]): Metric[]{
    return arr.sort((a: Metric, b: Metric) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
  }
}