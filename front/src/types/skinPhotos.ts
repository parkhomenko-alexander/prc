
export interface SkinPhotosState {
    photos: File[] | [];
    skinTone: number[] | null,
    tonalColor: number[] | null,
    amount: number[] | null,
    palette: Array<number[]>[] | null,
    isFetch: boolean
}

export enum SkinPhotosActionTypes {
    SELECTING_PHOTOS = 'SELECTING_PHOTOS',
    UPLOAD_PHOTOS = 'UPLOAD_PHOTOS',
    SET_SKIN_COLOR = 'SET_SKIN_COLOR',
    SET_PALETTE = 'SET_PALETTE',
    SET_TONAL_COLOR = 'SET_TONAL_COLOR',
    SET_AMOUNT_BASE_TONALS = 'SET_AMOUNT_BASE_TONALS',
    FETCH_DATA_TO_PERFORM_TRUE = 'FETCH_DATA_TO_PERFORM_TRUE',
    FETCH_DATA_TO_PERFORM_FALSE = 'FETCH_DATA_TO_PERFORM_FALSE '
}

interface SelectingPhotosAction {
    type: SkinPhotosActionTypes.SELECTING_PHOTOS;
    payload: File[]
}

interface UploadPhotosAction {
    type: SkinPhotosActionTypes.UPLOAD_PHOTOS;
    payload: File[]
}

interface SetSkinColorAction {
    type: SkinPhotosActionTypes.SET_SKIN_COLOR;
    payload: number[]
}

interface SetPaletteAction {
    type: SkinPhotosActionTypes.SET_PALETTE;
    payload: Array<number[]>[]
}

interface SetTonalColorAction {
    type: SkinPhotosActionTypes.SET_TONAL_COLOR;
    payload: number[]
}

interface SetAmountBaseTonalsAction {
    type: SkinPhotosActionTypes.SET_AMOUNT_BASE_TONALS;
    payload: number[]
}

interface FetchDataTrueAction {
    type: SkinPhotosActionTypes.FETCH_DATA_TO_PERFORM_TRUE;
    payload: boolean
}

interface FetchDataFalseAction {
    type: SkinPhotosActionTypes.FETCH_DATA_TO_PERFORM_FALSE;
    payload: boolean
}


export type PhotosAction = SelectingPhotosAction |
    UploadPhotosAction |
    SetSkinColorAction |
    SetPaletteAction |
    SetTonalColorAction |
    SetAmountBaseTonalsAction |
    FetchDataTrueAction |
    FetchDataFalseAction