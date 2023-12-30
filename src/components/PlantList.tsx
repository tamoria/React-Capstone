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
    { field: 'soil_nutriments', headerName: "Soil Nutriments", flex: 1}
]

function PlantList() {
    const { plantData } = useGetData();

    return (
        <div className="container mx-10 my-5 flex flex-col" style={{ height: 400, width: '100%' }}>
            <h2 className="p-3 bg-slate-300 my-2 rounded text-2xl">My Plants</h2>
            <DataGrid
                rows={plantData}
                columns={columns}
                rowsPerPageOptions={[5]}
                checkboxSelection={true}
                onSelectionModelChange={() => {
                }}
            />
        </div>
    );
}

export default PlantList;
