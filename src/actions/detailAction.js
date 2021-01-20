import axios from "axios";
import { gameDetailsURL, gameScreenshotUrl } from "../api";

export const loadDetail = id => async dispatch => {
  dispatch({
    type: "LOADING_DETAIL"
  });

  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotUrl(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotData.data
    }
  });
};
