import { Dispatch } from 'redux';
import { uploadSkinPhotos, getSkinColor, matchSkinColor } from '../../api/api';
import { PhotosAction, SkinPhotosActionTypes } from "../../types/skinPhotos";


export function selectPhotos(photos: File[] | []): PhotosAction {
    return {
        type: SkinPhotosActionTypes.SELECTING_PHOTOS,
        payload: photos
    }
}


export const matchColor = (photos: File[]) => {
    return async (dispatch: Dispatch<PhotosAction>) => {
        dispatch({
            type: SkinPhotosActionTypes.FETCH_DATA_TO_PERFORM_TRUE,
            payload: true
        })
        const response = await uploadSkinPhotos(photos)
        console.log(response.data)


        const matchSkinColorResponse = await matchSkinColor()
        console.log(matchSkinColorResponse)
        dispatch({
            type: SkinPhotosActionTypes.SET_SKIN_COLOR,
            payload: matchSkinColorResponse.data.skin_col
        })

        dispatch({
            type: SkinPhotosActionTypes.SET_TONAL_COLOR,
            payload: matchSkinColorResponse.data.tonal_col
        })

        dispatch({
            type: SkinPhotosActionTypes.SET_AMOUNT_BASE_TONALS,
            payload: matchSkinColorResponse.data.amount
        })

        dispatch({
            type: SkinPhotosActionTypes.FETCH_DATA_TO_PERFORM_FALSE,
            payload: false
        })
    }
}
