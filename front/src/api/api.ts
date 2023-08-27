import axios from "axios"

const instanse = axios.create({
    baseURL: 'http://localhost:5000',
})


export const uploadNewBasedTonals = (tonals: File[]) => {
    const formData = new FormData()
    for (const file of tonals) {
        formData.append('files', file)
    }
    return instanse.post<[string[], string]>('/base_tonals/add_new_tonals', formData)
}

export const uploadSkinPhotos = (photos: File[]) => {
    const formData = new FormData()
    for (const file of photos) {
        formData.append('files', file)
    }
    return instanse.post<string>('/color_matcher/upload_skin_photos', formData)
}

export const getSkinColor = () => {
    return instanse.get<number[]>('/color_matcher/get_skin_color')
}

export const matchSkinColor = () => {
    return instanse.get('/color_matcher/match_color')
}

export const getPalette = () => {
    return instanse.get('/color_matcher/generate_palette')
}


