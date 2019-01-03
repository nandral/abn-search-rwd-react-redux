import {
  SEARCH_BY_ABN_REQUEST,
  SEARCH_BY_NAME_REQUEST,
  SEARCH_ERROR,
  VIEW_ABN_REQUEST,
  VIEW_ABN_COMPLETED,
  SEARCH_BY_NAME_COMPLETED,
  SEARCH_BY_ABN_COMPLETED,
  PROCESSING_REQUEST
} from "./types";
import fetchJsonp from "fetch-jsonp";
import { takeLatest, call, put } from "redux-saga/effects";

const GUID = "b6242120-5bce-4b10-9839-d3045a7682da";
const ABR = "https://abr.business.gov.au/json/";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(SEARCH_BY_NAME_REQUEST, searchByNameSaga);
  yield takeLatest(SEARCH_BY_ABN_REQUEST, searchByAbnSaga);
  yield takeLatest(VIEW_ABN_REQUEST, viewAbnSaga);
}

function* searchByAbnSaga({ payload }) {
  const URL = `${ABR}AbnDetails.aspx?callback=abnCallback&abn=${payload}&guid=${GUID}`;
  let resp = yield fetchJsonp(URL, {
    jsonpCallbackFunction: "abnCallback"
  });
  resp = yield resp.json();
  // console.log(resp);
  if (resp.Message) {
    yield put({
      type: SEARCH_ERROR,
      payload: "Search text is not a valid ABN"
    });
  } else
    yield put({
      type: SEARCH_BY_ABN_COMPLETED,
      payload: mapAbnToBusiness(resp)
    });
}

function* searchByNameSaga({ payload }) {
  yield put({ type: PROCESSING_REQUEST, payload: true });
  const URL = `${ABR}MatchingNames.aspx?callback=nameCallback&name=${payload}&maxResults=20&guid=${GUID}`;
  let resp = yield fetchJsonp(URL, {
    jsonpCallbackFunction: "nameCallback"
  });
  resp = yield resp.json();
  yield put({ type: PROCESSING_REQUEST, payload: false });
  if (resp.Names && resp.Names.length > 0) {
    const names = mapNamesToBusiness(resp.Names);
    yield put({ type: SEARCH_BY_NAME_COMPLETED, payload: names });
  } else {
    yield put({
      type: SEARCH_ERROR,
      payload: "Search text is not a valid business name"
    });
  }
}

function mapAbnToBusiness({
  Abn,
  AbnStatus,
  AddressPostcode,
  AddressState,
  EntityName,
  EntityTypeName
}) {
  return {
    abn: Abn,
    name: EntityName,
    status: AbnStatus,
    location: `${AddressPostcode} ${AddressState}`,
    type: EntityTypeName
  };
}

function mapNamesToBusiness(names) {
  return names.map(({ Abn, Name, AbnStatus, NameType, Postcode, State }) => ({
    abn: Abn,
    name: Name,
    status: AbnStatus === "0000000001" ? "Active" : "Cancelled",
    location: `${Postcode} ${State}`,
    type: NameType
  }));
}

function* viewAbnSaga({ payload }) {
  console.log("viewAbnSaga :: ", payload);
  const URL = `${ABR}AbnDetails.aspx?callback=abnCallback&abn=${payload}&guid=${GUID}`;
  let resp = yield fetchJsonp(URL, {
    jsonpCallbackFunction: "abnCallback"
  });
  resp = yield resp.json();
  console.log("resp ::", resp);
  if (resp.Message) {
    yield put({
      type: SEARCH_ERROR,
      payload: "Search text is not a valid ABN"
    });
  } else
    yield put({
      type: VIEW_ABN_COMPLETED,
      payload: mapAbnToBusiness(resp)
    });
}
