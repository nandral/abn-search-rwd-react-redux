import {
  searchByNameSaga,
  searchByAbnSaga,
  mapNamesToBusiness,
  mapAbnToBusiness,
  GUID,
  ABR
} from "../index";
import { testSaga } from "redux-saga-test-plan";
import fetchJsonp from "fetch-jsonp";
import {
  SEARCH_BY_NAME_COMPLETED,
  SEARCH_BY_ABN_COMPLETED,
  SEARCH_ERROR,
  // VIEW_ABN_COMPLETED,
  PROCESSING_REQUEST
} from "actions/types";

describe("Saga tests", () => {
  it("searchByNameSaga returns results for valid input", () => {
    const input = { payload: "GOOGLE" };
    const URL = `${ABR}MatchingNames.aspx?callback=nameCallback&name=${
      input.payload
    }&maxResults=20&guid=${GUID}`;

    const mockRespPromise = {
      json() {
        return Promise.resolve();
      }
    };

    const mockResp = {
      Message: "",
      Names: [
        {
          Abn: "85165813249",
          AbnStatus: "0000000001",
          IsCurrent: true,
          Name: "AWESOME CO PTY LTD",
          NameType: "Entity Name",
          Postcode: "2089",
          Score: 100,
          State: "NSW"
        }
      ]
    };

    const mockMappedResp = [
      {
        abn: "32614059737",
        name: "Trade Ledger",
        status: "Active",
        location: "2000 NSW"
      }
    ];

    testSaga(searchByNameSaga, input)
      .next()
      .put({ type: PROCESSING_REQUEST, payload: true })
      .next()
      .call(fetchJsonp, URL, {
        jsonpCallbackFunction: "nameCallback"
      })
      .next(mockRespPromise)
      .call(mockRespPromise.json)
      .next(mockResp)
      .put({ type: PROCESSING_REQUEST, payload: false })
      .next()
      .call(mapNamesToBusiness, mockResp.Names)
      .next(mockMappedResp)
      .put({ type: SEARCH_BY_NAME_COMPLETED, payload: mockMappedResp })
      .next()
      .isDone();
  });

  it("searchByNameSaga returns error for invalid input", () => {
    const input = { payload: "JSJSJJSSJSJSJSJSJ" };
    const URL = `${ABR}MatchingNames.aspx?callback=nameCallback&name=${
      input.payload
    }&maxResults=20&guid=${GUID}`;

    const mockRespPromise = {
      json() {
        return Promise.resolve();
      }
    };

    const mockResp = {
      Message: "",
      Names: []
    };

    testSaga(searchByNameSaga, input)
      .next()
      .put({ type: PROCESSING_REQUEST, payload: true })
      .next()
      .call(fetchJsonp, URL, {
        jsonpCallbackFunction: "nameCallback"
      })
      .next(mockRespPromise)
      .call(mockRespPromise.json)
      .next(mockResp)
      .put({ type: PROCESSING_REQUEST, payload: false })
      .next()
      .put({
        type: SEARCH_ERROR,
        payload: "Search text is not a valid business name"
      })
      .next()
      .isDone();
  });

  it("searchByAbnSaga returns results for valid input", () => {
    const input = { payload: "32614059737" };
    const URL = `${ABR}AbnDetails.aspx?callback=abnCallback&abn=${
      input.payload
    }&guid=${GUID}`;

    const mockRespPromise = {
      json() {
        return Promise.resolve();
      }
    };

    const mockResp = {
      Abn: "32614059737",
      AbnStatus: "Active",
      AddressDate: "2016-08-08",
      AddressPostcode: "2000",
      AddressState: "NSW",
      BusinessName: [],
      EntityName: "TRADE LEDGER PTY. LTD.",
      EntityTypeCode: "PRV",
      EntityTypeName: "Australian Private Company",
      Gst: "2016-08-08",
      Message: ""
    };

    const mockMappedResp = {
      abn: "32614059737",
      name: "Trade Ledger",
      status: "Active",
      location: "2000 NSW"
    };

    testSaga(searchByAbnSaga, input)
      .next()
      .put({ type: PROCESSING_REQUEST, payload: true })
      .next()
      .call(fetchJsonp, URL, {
        jsonpCallbackFunction: "abnCallback"
      })
      .next(mockRespPromise)
      .call(mockRespPromise.json)
      .next(mockResp)
      .put({ type: PROCESSING_REQUEST, payload: false })
      .next()
      .call(mapAbnToBusiness, mockResp)
      .next(mockMappedResp)
      .put({ type: SEARCH_BY_ABN_COMPLETED, payload: mockMappedResp })
      .next()
      .isDone();
  });

  it("searchByAbnSaga returns error for invalid input", () => {
    const input = { payload: "123213" };
    const URL = `${ABR}AbnDetails.aspx?callback=abnCallback&abn=${
      input.payload
    }&guid=${GUID}`;

    const mockRespPromise = {
      json() {
        return Promise.resolve();
      }
    };

    const mockResp = {
      Message: "Search text is not a valid ABN"
    };

    testSaga(searchByAbnSaga, input)
      .next()
      .put({ type: PROCESSING_REQUEST, payload: true })
      .next()
      .call(fetchJsonp, URL, {
        jsonpCallbackFunction: "abnCallback"
      })
      .next(mockRespPromise)
      .call(mockRespPromise.json)
      .next(mockResp)
      .put({ type: PROCESSING_REQUEST, payload: false })
      .next()
      .put({
        type: SEARCH_ERROR,
        payload: "Search text is not a valid ABN"
      })
      .next()
      .isDone();
  });
});
