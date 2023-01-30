import React from "react";
import { AppContext } from "../context/AppContext";
import { Metric } from "../Models/Metric";
import { SortUtils } from "../utils/sort";
import { toast, ToastContainer } from 'react-toastify';
import ChartComponent from "../components/Chart";
import SkeletonWrapper from "../components/Skeleton";

interface IState {
  data: Metric[]
}

class IndexPage extends React.Component<{}, IState> {
  context!: React.ContextType<typeof AppContext>
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state = {
      data: []
    }
  }

  get backendService() {
    return this.context.services.backendService
  }
  componentDidMount(): void {
    this.getData()
  }

  getData(): void {
    this.backendService.getMetrics()
      .then(
        (res: Metric[]) => {
          this.setState({
            data: SortUtils.dateDesc(res),
          })
        }
      ).catch(
        (err: string) => {
          this.notifyError(err)
        }
      )
  }
  notifyError(message: string) {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }


  render(): React.ReactNode {
    return (
      <>
        {
          this.state.data.length 
          ? <ChartComponent data={this.state.data} />
          : <SkeletonWrapper/>
        }
        <ToastContainer />
      </>
    )
  }
}
IndexPage.contextType = AppContext
export default IndexPage