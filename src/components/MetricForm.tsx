import { useEffect, useState } from "react"
import { useForm, Controller, useFieldArray, useFormContext } from "react-hook-form"
import { Metric } from "../Models/Metric"

interface FormProps {
  create?: Function,
  update?: Function,
  delete?: Function,
  data: Metric,
  isNew?: boolean
}


const FormComponent = (props: FormProps) => {
  const { control, register, handleSubmit, getValues } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'amounts'
  })
  useEffect(() => {
    setFormInitialData()
  }, [])

  const setFormInitialData = () =>{
    props.data.amounts && props.data.amounts.forEach((value, index, array) => {
      if(!fields[index]) append({
        value: value,
      });
    })
  }
  const addNewAmount = () => {
    append({
      value: 0,
    });
  };

  const removeAmount = (index: number) => () => {
    console.log('entra')
    remove(index);
  };

  const submitForm = () =>{
    console.log(getValues())
  }

  const prepareData = () => {
    const updatedData = getValues()
    return {
      ...props.data,
      code: updatedData.code,
      amounts:updatedData.amounts.map((amount:any) => parseFloat(amount.value)),
      data: updatedData.date 
    }
  }


  const renderActions = () =>{
    if(!props.isNew){
      return(
        <button onClick={()=>{
          props.create && props.create(prepareData())
        }}>create</button>
      )
    }else{
      return(
        <button onClick={()=>{
          props.update && props.update(prepareData())
        }}>update</button>
      )
    }
  }

  return (
    <form onSubmit={(e)=>{e.preventDefault()}} >
    <fieldset>
        <input 
          type="text"
          {...register(`code`, {
            required: true
          })}
          defaultValue={props.data.code}
        />
    </fieldset>
    <fieldset>
        <input 
          type="date"
          {...register(`date`)}
          defaultValue={props.data.date.toISOString().slice(0, 10)}
        />
    </fieldset>
    <fieldset>
      {fields.map(
        (field, index) => {
          return (
            <div>
              <input
                type='number'
                key={`${props.data.id}-${field.id}`}
                {...register(`amounts.${index}.value`)}
              />
              <button onClick={removeAmount(index)}> -</button>
            </div>

          )
        }
      )}
      <button onClick={() => addNewAmount()}>add item</button>
    </fieldset>
      {renderActions()}
      <button onClick={()=>{
          props.delete && props.delete(props.data.id)
        }}>delete</button>
    </form>


  )
}

export default FormComponent