import { call, put } from "redux-saga/effects";
import { makeApiRequest } from "./../axiosInstance";
import { stopSubmit } from "redux-form";

import { getSuccessType } from "./../reducer.js";

import { toast } from "react-toastify";

export function* sagaFn(action) {
  if (action.config) {
    if (action.config.data) {
      const { meta, ...rest } = action.config.data;
      action.config.data = rest;
    }

    const { response, error } = yield call(makeApiRequest, action.config);

    if (error) {
      console.log(
        `api ${action.config.url} from config ${JSON.stringify(
          action.config
        )} returned error`,
        error
      );
      toast.error("Connection Error!");
    }

    if (response.status === 200) {
      if (response.data.code === 200) {
        yield put({
          type: getSuccessType(action.type),
          data: response.data.data
        });
      }
      if (response.data.toast) {
        toast[response.data.toast.fn](response.data.toast.msg);
      }

      if (response.data.code === 450 && action.form) {
        yield put(stopSubmit(action.form, response.data.data));
      }
    }
  }
}
