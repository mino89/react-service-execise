import React from "react";
import { AppContext } from "../context/AppContext";

class IndexPage extends React.Component{
  context!: React.ContextType<typeof AppContext>
  constructor(props: {} | Readonly<{}>){
    super(props)
  
  }

  get backendService(){
    return this.context.services.backendService
  }


  render(): React.ReactNode {
      return(
        <>
          <h1>Index Works</h1>
        </>
      )
  }
}

export default IndexPage