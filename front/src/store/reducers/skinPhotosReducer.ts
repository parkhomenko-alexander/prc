import { PhotosAction, SkinPhotosActionTypes, SkinPhotosState } from "../../types/skinPhotos"

const initialState: SkinPhotosState = {
    photos: [],
    skinTone: null,
    tonalColor: null,
    amount: null,
    palette: null,
    isFetch: false
}

export const skinPhotos = (state = initialState, action: PhotosAction): SkinPhotosState => {
    switch (action.type) {
        case SkinPhotosActionTypes.SELECTING_PHOTOS:
            return {
                photos: action.payload,
                skinTone: state.skinTone,
                tonalColor: state.tonalColor,
                amount: state.amount,
                palette: state.palette,
                isFetch: state.isFetch
            }
        case SkinPhotosActionTypes.UPLOAD_PHOTOS:
            return {
                photos: state.photos,
                skinTone: state.skinTone,
                tonalColor: state.tonalColor,
                amount: state.amount,
                palette: state.palette,
                isFetch: state.isFetch
            }
        case SkinPhotosActionTypes.SET_SKIN_COLOR:
            return {
                photos: state.photos,
                skinTone: action.payload,
                tonalColor: state.tonalColor,
                amount: state.amount,
                palette: state.palette,
                isFetch: state.isFetch
            }
        case SkinPhotosActionTypes.SET_PALETTE:
            return {
                photos: state.photos,
                skinTone: state.skinTone,
                tonalColor: state.tonalColor,
                amount: state.amount,
                palette: action.payload,
                isFetch: state.isFetch
            }
        case SkinPhotosActionTypes.SET_TONAL_COLOR:
            return {
                photos: state.photos,
                skinTone: state.skinTone,
                tonalColor: action.payload,
                amount: state.amount,
                palette: state.palette,
                isFetch: state.isFetch
            }
        case SkinPhotosActionTypes.SET_AMOUNT_BASE_TONALS:
            return {
                photos: state.photos,
                skinTone: state.skinTone,
                tonalColor: state.tonalColor,
                amount: action.payload,
                palette: state.palette,
                isFetch: state.isFetch
            }
        case SkinPhotosActionTypes.FETCH_DATA_TO_PERFORM_TRUE:
            return {
                photos: state.photos,
                skinTone: state.skinTone,
                tonalColor: state.tonalColor,
                amount: state.amount,
                palette: state.palette,
                isFetch: action.payload
            }
        case SkinPhotosActionTypes.FETCH_DATA_TO_PERFORM_FALSE:
            return {
                photos: state.photos,
                skinTone: state.skinTone,
                tonalColor: state.tonalColor,
                amount: state.amount,
                palette: state.palette,
                isFetch: action.payload
            }
        default:
            return state
    }
}