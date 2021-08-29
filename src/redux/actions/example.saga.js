import {call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'https://611fe63824d11c001762eb49.mockapi.io/task/gettask';

function getApi(){
    return fetch(apiUrl,{
        method : 'GET',
        headers : {
            'Content-Type' :'application/json',
        },
    }).then(response => response.json())
    .catch(error => {throw error})
}

function* fetchUser(){
    try{
        const users = yield call(getApi);
        yield put ({type : 'GET_USER_SUCCESS' , users : users})
    }
    catch(e){
        yield put ({type : 'GET_USER_FAILED' , message : e.message})
    }
    
}

function* userSaga(){
    yield takeEvery('GET_USER_REQUESTED',fetchUser)
}

export default userSaga;