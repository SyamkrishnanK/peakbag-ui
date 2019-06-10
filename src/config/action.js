import { dispatch } from "./store";

export const actionTypes = {
  FETCHDATA: "FETCHDATA",
  SUBMITHIKE: "SUBMITHIKE"
};

export const fetchData = () => {
  const action = {
    type: actionTypes.FETCHDATA,
    config: {
      method: "get",
      url: "/api/getdata"
    }
  };
  dispatch(action);
};

export const submitHike = form => values => {
  const action = {
    type: actionTypes.SUBMITHIKE,
    config: {
      method: "post",
      url: "api/submithike",
      data: values
    },
    form
  };
  dispatch(action);
};

export const toggleModal = show => {
  const action = {
    type: "TOGGLEMODAL",
    data: show
  };
  dispatch(action);
};
