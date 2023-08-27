import { PhotosAction, SkinPhotosActionTypes } from './../../types/skinPhotos';
import { getPalette, uploadNewBasedTonals } from './../../api/api';
import { TonalAction, TonalPhotosActionTypes } from "../../types/tonalPhotos";
import { Dispatch } from 'redux';


export function selectTonals(photos: File[] | []): TonalAction {
    return {
        type: TonalPhotosActionTypes.SELECTING_NEW_TONALS,
        payload: photos
    }
}

export const setPalette = () => {
    return async (dispatch: Dispatch<PhotosAction>) => {
        const palette = await getPalette()
        console.log('asd')
        console.log(palette)
        dispatch({
            type: SkinPhotosActionTypes.SET_PALETTE,
            payload: palette.data
        })
    }
}

export const uploadNewTonals = (photos: File[]) => {
    return async (dispatch: Dispatch<TonalAction | PhotosAction>) => {
        dispatch({
            type: TonalPhotosActionTypes.FETCH_PHOTOS_TRUE,
            payload: true
        })
        const response = await uploadNewBasedTonals(photos)
        // console.log(response)
        dispatch({
            type: TonalPhotosActionTypes.UPLOAD_NEW_TONALS,
            payload: { ph: response.data[0], date: response.data[1] }
        })
        dispatch({
            type: TonalPhotosActionTypes.CLEAR_NEW_TONALS,
            payload: []
        })
        const palette = await getPalette()

        dispatch({
            type: SkinPhotosActionTypes.SET_PALETTE,
            payload: palette.data
        })

        dispatch({
            type: TonalPhotosActionTypes.FETCH_PHOTOS_FALSE,
            payload: false
        })
    }
}
