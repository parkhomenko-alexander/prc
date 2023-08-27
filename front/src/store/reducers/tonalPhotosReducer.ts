import { TonalPhotosState, TonalPhotosActionTypes, TonalAction } from "../../types/tonalPhotos"

const initialState: TonalPhotosState = {
    newTonals: [],
    currentTonals: [],
    currentDate: null,
    res: '',
    isFetch: false
}

export const tonalPhotos = (state = initialState, action: TonalAction): TonalPhotosState => {
    switch (action.type) {
        case TonalPhotosActionTypes.SELECTING_NEW_TONALS:
            return {
                newTonals: action.payload,
                res: state.res,
                currentTonals: [...state.currentTonals],
                currentDate: state.currentDate,
                isFetch: state.isFetch
            }
        case TonalPhotosActionTypes.UPLOAD_NEW_TONALS:
            return {
                newTonals: [...state.newTonals],
                res: state.res,
                currentTonals: action.payload.ph,
                currentDate: action.payload.date,
                isFetch: state.isFetch
            }
        case TonalPhotosActionTypes.CLEAR_NEW_TONALS:
            return {
                newTonals: action.payload,
                res: state.res,
                currentTonals: state.currentTonals,
                currentDate: state.currentDate,
                isFetch: state.isFetch
            }
        case TonalPhotosActionTypes.FETCH_PHOTOS_TRUE:
            return {
                newTonals: state.newTonals,
                res: state.res,
                currentTonals: state.currentTonals,
                currentDate: state.currentDate,
                isFetch: action.payload
            }
        case TonalPhotosActionTypes.FETCH_PHOTOS_FALSE:
            return {
                newTonals: state.newTonals,
                res: state.res,
                currentTonals: state.currentTonals,
                currentDate: state.currentDate,
                isFetch: action.payload
            }
        default:
            return state
    }
}