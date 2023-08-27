import { combineReducers } from "redux";
import { skinPhotos } from "./skinPhotosReducer";
import { tonalPhotos } from "./tonalPhotosReducer";


export const rootReducer = combineReducers({
    skinPhotos: skinPhotos,
    tonalPhotos: tonalPhotos
})

export type RootState = ReturnType<typeof rootReducer>