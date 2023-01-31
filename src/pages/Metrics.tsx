import React from "react";
import FormComponent from "../components/MetricForm";
import { AppContext } from "../context/AppContext";
import { Metric } from "../Models/Metric";
import { SortUtils } from "../utils/sort";

import { toast, ToastContainer } from 'react-toastify';
import SkeletonWrapper from "../components/Skeleton";

interface IState{
  data: Metric[]
  mapStatus: Metric[],
}

class MetricsPage extends React.Component<{}, IState>{
  context!: React.ContextType<typeof AppContext>
  constructor(props: {}){
    super(props)
    this.state ={
      data:[],
      mapStatus:[],
    }
  }

  get backendService(){
    return this.context.services.backendService
  }

  componentDidMount(): void {
      this.getData()
  }

  getData(): void{
    this.backendService.getMetrics()
    .then(
      (res:Metric[]) =>{
        this.setState({
          data: SortUtils.dateDesc(res),
          mapStatus: SortUtils.dateDesc(res)
        })
      }
    ).catch(
      (err:string)=>{
        this.notifyError(err)
      }
    )
  }
  //method useless in a real case scenario
  checkPresence = (origin: Metric[] | undefined, id: string) => {
    if (origin && origin.some((el: Metric) => el.id === id)) {
      return true
    } else {
      return false
    }
  }

  generateId = () => {
    const generatedId = Math.random().toString(36).substring(2, 3 + 2);
    const exists = this.checkPresence(this.state.data, generatedId)
    if (exists) {
      this.generateId()
      return ''
    } else {
      return generatedId
    }
  }

  addEmptyDataSet() {
    const newItem = new Metric(this.generateId(), '', [], new Date())
    const updatedItem = [{ ...newItem }, ...this.state.data]
    this.setState({
      data: updatedItem
    })
  }

  notifyError(message:string){
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

  notifySuccess(message:string){
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

  render(): React.ReactNode {
      const createItem = (item:Metric) =>{
        this.backendService.addMetric(item)
        .then(
          () =>{
            this.getData()
            this.notifySuccess(' Intem Created!')
          }
        ).catch(
          (err:string)=>{
            this.notifyError(err)
          }
        )
      }
      const updateItem = (item:Metric) =>{
        this.backendService.updateMetric(item)
        .then(
          () =>{
            this.getData()
            this.notifySuccess(' Intem Updated!')
          }
        ).catch(
          (err:string)=>{
            this.notifyError(err)
          }
        )
      }
      const deleteItem = (id:string) =>{
        this.backendService.deleteMetric(id)
        .then(
          () =>{
            this.getData()
            this.notifySuccess(' Intem Deleted!')
          }
        ).catch(
          (err:string)=>{
            this.notifyError(err)
          }
        )
      }
      return(
        <div className="container">
          <h1>Manage your metrics</h1>
          <button onClick={() => { this.addEmptyDataSet() }}> + add new metric</button>
          {
          this.state.data.length 
          ? this.state.data.map((item: Metric, index: number, array: Metric[]) => {
              return (
                <FormComponent
                  key={item.id}
                  create={createItem}
                  update={updateItem}
                  delete={deleteItem}
                  data={item}
                  isNew={this.checkPresence(this.state.mapStatus, item.id)} 
                  />
                  
              )
            })
          : <><SkeletonWrapper/><SkeletonWrapper/><SkeletonWrapper/></>
        }
         <ToastContainer />
        </div>
      )
  }
}
MetricsPage.contextType = AppContext
export default MetricsPage