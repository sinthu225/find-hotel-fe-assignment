import UtilityService from "shared/services/utlityService";
import { reducerType } from "../../../shared/redux/types";
import { IHomeSearchState } from "../home.screen";
import { actions } from "./home.actions";

const reducer: reducerType<IHomeSearchState> = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_GUEST_MODAL:
      return {
        ...state,
        showGuestModal: action.payload,
      };
    case actions.UPDATE_GUEST_OBJ:
      return {
        ...state,
        guestDetails: action.payload,
        totalGuest: UtilityService.getGuestCount(action.payload),
        showGuestModal: false,
      };
  }
};

export { reducer };
