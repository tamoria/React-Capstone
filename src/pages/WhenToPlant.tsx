import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import Input from '../components/Input';
import Button from '../components/Button';
import BackgroundImage from '../assets/images/leaves.jpg';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'common_name', headerName: 'Plant Common Name', flex: 1 },
  { field: 'scientific_name', headerName: "Plant Scientific Name", flex: 1},
  { field: 'days_to_harvest', headerName: "Days to Harvest", flex: 1},
  { field: 'sowing', headerName: "Sowing", flex: 1},
  { field: 'light', headerName: "Light", flex: 1},
  { field: 'row_spacing', headerName: "Row Spacing", flex: 1},
  { field: 'minimum_root_depth', headerName: "Minimum Root Depth", flex: 1},
  { field: 'soil_nutriments', headerName: "Soil Nutriments", flex: 1},
  { field: 'when_to_plant', headerName: 'When to Plant', flex: 1 },
];


function WhenToPlant() {
  const { plantData } = useGetData();
  const [filteredData, setFilteredData] = useState(plantData);
  const [filterCriteria, setFilterCriteria] = useState('');

  // Filter by 'when_to_plant'
  const filterData = () => {
    const filtered = plantData.filter((plant) =>
      plant.when_to_plant.toLowerCase().includes(filterCriteria.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
      }}
    >
      <div className="container mx-10 my-5 flex flex-col" >
        <div className="flex items-center space-x-2 mb-4" style={{ width: '40%' }} >
          <Input
            placeholder="Enter month"
            value={filterCriteria}
            onChange={(e) => setFilterCriteria(e.target.value)}
          />
          <Button onClick={filterData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white">Filter</Button>
        </div>

        <div className="flex">
          {/* DataGrid */}
          <div className="flex-3" style={{ width: '95%', height: '100%'}}>
            <h2 className="p-3 bg-slate-300 my-2 rounded text-2xl">Filtered Plants</h2>
            <DataGrid
              rows={filteredData}
              columns={columns}
              rowsPerPageOptions={[5]}
              checkboxSelection={true}
              onSelectionModelChange={() => {}}
              autoHeight
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhenToPlant;
