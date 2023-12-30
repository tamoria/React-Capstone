import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        common_name: "Common Name",
        scientific_name: "Scientific Name",
        days_to_harvest: "Days to Harvest",
        sowing: "Sowing",
        light: "Light",
        row_spacing: "Row Spacing",
        minimum_root_depth: "Minimum Root Depth",
        soil_nutriments: "Soil Nutriments",
    },
    reducers: {
        chooseCommon: (state, action) => { state.common_name = action.payload},
        chooseScientific: (state, action) => { state.scientific_name = action.payload},
        chooseDays: (state, action) => { state.days_to_harvest = action.payload},
        chooseSowing: (state, action) => { state.sowing = action.payload},
        chooseLight: (state, action) => { state.light = action.payload},
        chooseRow: (state, action) => { state.row_spacing = action.payload},
        chooseMinimum: (state, action) => { state.minimum_root_depth = action.payload},
        chooseSoil: (state, action) => { state.soil_nutriments = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseCommon, chooseScientific, chooseDays, chooseSowing, chooseLight, chooseRow, chooseMinimum, chooseSoil} = rootSlice.actions