import * as api from '../api'

//Action Creators
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (err) {
        console.log(err.message)
    }

}

export const createPost = (post) => async(dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: 'CREATE', payload: data })
    } catch (err) {
        console.log(err.message)
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const pst = await api.updatePost(id, post)
        dispatch({ type: 'UPDATE', payload: pst.data })
    } catch (err) {
        console.log(err.message)
    }
}