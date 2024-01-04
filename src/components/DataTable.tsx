import React, { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'common_name', headerName: "Plant Common Name", flex: 1},
    { field: 'scientific_name', headerName: "Plant Scientific Name", flex: 1},
    { field: 'days_to_harvest', headerName: "Days to Harvest", flex: 1},
    { field: 'sowing', headerName: "Sowing", flex: 1},
    { field: 'light', headerName: "Light", flex: 1},
    { field: 'row_spacing', headerName: "Row Spacing", flex: 1},
    { field: 'minimum_root_depth', headerName: "Minimum Root Depth", flex: 1},
    { field: 'soil_nutriments', headerName: "Soil Nutriments", flex: 1},
    { field: 'when_to_plant', headerName: "When to Plant", flex: 1}
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { plantData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
    }


  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row" style={{flex:3}}>
            <div>
                <button
                    className="p-3 font-semibold bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Plant
                </button>
            </div> 
            <Button onClick={handleOpen} className="p-3 font-semibold bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 font-semibold bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-12 my-5 flex flex-col"}
            style={{ height: 400, width: '100%', maxWidth: '1400px'}}
        >
            <h2 className="p-3 font-semibold bg-slate-300 my-2 rounded text-2xl">My Plants</h2>
            <DataGrid rows={plantData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable

