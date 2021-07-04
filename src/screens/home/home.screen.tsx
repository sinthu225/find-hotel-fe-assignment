import React, { useEffect, useReducer, useState } from "react";
import UtilityService from "shared/services/utlityService";
import { GuestPickerModal } from "./components/guestPicker";
import { HomePageContainer } from "./home.styles";
import { actions, reducer } from "./redux";
import { defaultRoom } from "shared/constants/constants";

export interface IHomeSearchState {
  searchKeyword: string;
  checkIn: Date;
  checkOut: Date;
  guestDetails: any;
  showGuestModal: boolean;
  totalGuest: number;
}

const HomeScreen: React.FC = () => {
  const initialState: IHomeSearchState = {
    searchKeyword: "",
    checkIn: null,
    checkOut: null,
    guestDetails: defaultRoom,
    showGuestModal: false,
    totalGuest: UtilityService.getGuestCount(defaultRoom),
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [roomDeatils, setRoomDeatils] = useState(null);
  const guestSelectorHandler = () => {
    dispatch({
      type: actions.TOGGLE_GUEST_MODAL,
      payload: true,
    });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const rooms = queryParams.get("rooms");
    if (rooms) {
      const guestObj = UtilityService.parseURLParamsToGuestObj(
        decodeURIComponent(rooms)
      );
      setRoomDeatils(guestObj);
      dispatch({
        type: actions.UPDATE_GUEST_OBJ,
        payload: guestObj,
      });
      const newParam = UtilityService.parseGuestObjToURLParam(guestObj);
      window.history.replaceState("", "", `?rooms=${newParam}`);
    } else {
      window.history.replaceState(
        "",
        "",
        `?rooms=${UtilityService.parseGuestObjToURLParam(defaultRoom)}`
      );
    }
  }, []);

  const searchHandler = (guestObj) => {
    const newParam = UtilityService.parseGuestObjToURLParam(guestObj);
    window.history.replaceState("", "", `?rooms=${newParam}`);
  };

  const guestPickerCloseHandler = () => {
    dispatch({
      type: actions.TOGGLE_GUEST_MODAL,
      payload: false,
    });
  };

  return (
    <>
      <HomePageContainer>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <h1>Find the perfect deal, always. </h1>
              <div className="search-container">
                <div className="input-wrapper search">
                  <input
                    type="text"
                    placeholder="Type city, place, or hotel name"
                  />
                </div>
                <div className="d-flex check-in-checkout">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      placeholder="Type city, place, or hotel name"
                    />
                  </div>
                  <div
                    className="input-wrapper guest-picker d-flex align-items-center"
                    onClick={guestSelectorHandler}
                  >
                    <div className="lbl" data-test="guest-number-label">
                      {state.totalGuest}
                    </div>
                  </div>
                </div>
                <button className="search-btn">Search</button>
              </div>
              <div className="logos-container d-flex align-items-center">
                <img src="img/logo-expedia.svg" alt="" />
                <img src="img/logo-booking.svg" alt="" />
                <img src="img/logo-hotels.svg" alt="" />
                <img src="img/logo-agoda.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </HomePageContainer>
      {state.showGuestModal && (
        <GuestPickerModal
          guestDetails={roomDeatils}
          dispatch={dispatch}
          searchHandler={searchHandler}
          closeHandler={guestPickerCloseHandler}
          showModal={state.showGuestModal}
        />
      )}
    </>
  );
};

export { HomeScreen };
