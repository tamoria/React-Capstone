import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseCommon, chooseScientific, chooseDays, chooseSowing, chooseLight, chooseRow, chooseMinimum, chooseSoil } from "../redux/slices/RootSlice"

interface PlantFormProps {
  id?: string[]
}

const PlantForm = ( props:PlantFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.common_name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseCommon(data.common_name));
      dispatch(chooseScientific(data.scientific_name));
      dispatch(chooseDays(data.days_to_harvest));
      dispatch(chooseSowing(data.sowing));
      dispatch(chooseLight(data.light));
      dispatch(chooseRow(data.row_spacing));
      dispatch(chooseMinimum(data.minimum_root_depth));
      dispatch(chooseSoil(data.soil_nutriments));

      server_calls.create(store.getState())
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="common_name">Common Name</label>
          <Input {...register('common_name')} name='common_name' placeholder="Common Name" />
        </div>
        <div>
          <label htmlFor="scientific_name">Scientific Name</label>
          <Input {...register('scientific_name')} name='scientific_name' placeholder="Scientific Name" />
        </div>
        <div>
          <label htmlFor="days_to_harvest">Days to Harvest</label>
          <Input {...register('days_to_harvest')} name='days_to_harvest' placeholder="Days to Harvest" />
        </div>
        <div>
          <label htmlFor="sowing">Sowing</label>
          <Input {...register('sowing')} name='sowing' placeholder="Sowing" />
        </div>
        <div>
          <label htmlFor="light">Light</label>
          <Input {...register('light')} name='light' placeholder="Light" />
        </div>
        <div>
          <label htmlFor="row_spacing">Row Spacing</label>
          <Input {...register('row_spacing')} name='row_spacing' placeholder="Row Spacing" />
        </div>
        <div>
          <label htmlFor="minimum_root_depth">Minimum Root Depth</label>
          <Input {...register('minimum_root_depth')} name='minimum_root_depth' placeholder="Minimum Root Depth" />
        </div>
        <div>
          <label htmlFor="soil_nutriments">Soil Nutriments</label>
          <Input {...register('soil_nutriments')} name='soil_nutriments' placeholder="Soil Nutriments" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PlantForm      