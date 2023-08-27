export interface TonalPhotosState {
    newTonals: File[] | [];
    currentTonals: string[] | [];
    currentDate: string | null;
    res: string,
    isFetch: boolean
}

export enum TonalPhotosActionTypes {
    SELECTING_NEW_TONALS = 'SELECTING_NEW_TONALS',
    UPLOAD_NEW_TONALS = 'UPLOAD_NEW_TONALS',
    CLEAR_NEW_TONALS = 'CLEAR_NEW_TONALS',
    FETCH_PHOTOS_TRUE = 'FETCH_PHOTOS_TRUE',
    FETCH_PHOTOS_FALSE = 'FETCH_PHOTOS_FALSE '
}


interface SelectingNewTonalsAction {
    type: TonalPhotosActionTypes.SELECTING_NEW_TONALS;
    payload: File[]
}

interface UpdateNewTonalsAction {
    type: TonalPhotosActionTypes.UPLOAD_NEW_TONALS;
    payload: {
        ph: string[],
        date: string
    }
}

interface ClearNewTonalsAction {
    type: TonalPhotosActionTypes.CLEAR_NEW_TONALS;
    payload: []
}

interface FetchPhotosTrueAction {
    type: TonalPhotosActionTypes.FETCH_PHOTOS_TRUE;
    payload: boolean
}

interface FetchPhotosFalseAction {
    type: TonalPhotosActionTypes.FETCH_PHOTOS_FALSE;
    payload: boolean
}

export type TonalAction = SelectingNewTonalsAction |
    UpdateNewTonalsAction |
    ClearNewTonalsAction |
    FetchPhotosTrueAction |
    FetchPhotosFalseAction





// currentTonals: File[];
//     loading: boolean;
//     error: null | string

// FETCHING_TONALS = 'FETCHING_TONALS',
// FETCHING_TONALS_SUCCESS = 'FETCHING_TONALS_SUCCESS',
// FETCHING_TONALS_ERROR = 'FETCHING_TONALS_ERROR',


// interface FetchTonalsAction {
//     type: TonalPhotosActionTypes.FETCHING_TONALS
// }

// interface FetchPhotosSuccessAction {
//     type: TonalPhotosActionTypes.FETCHING_TONALS_SUCCESS;
//     payload: any[]
// }

// interface FetchPhotosErrorAction {
//     type: TonalPhotosActionTypes.FETCHING_TONALS_ERROR;
//     payload: string
// }


// FetchTonalsAction | FetchPhotosSuccessAction | FetchPhotosErrorAction |