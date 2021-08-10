import { all } from 'redux-saga/effects';
import videoMessages from 'sagas/videoMessages';

export default function* rootSaga() {
        yield all([
                ...videoMessages,
        ]);
}
