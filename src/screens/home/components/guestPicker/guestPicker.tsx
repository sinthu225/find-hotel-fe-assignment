import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { GuestPickerModalContainer } from "./guestPicker.styles";
import { Spinner } from "shared/components/spinner";
import { roomConfig } from "shared/constants/constants";
import { actions } from "screens/home/redux";
import UtilityService from "shared/services/utlityService";
import {cloneDeep} from 'lodash';

interface IGuestPickerModal {
  guestDetails: any;
  dispatch: any;
  showModal: boolean;
  closeHandler: () => void;
  searchHandler: (guestObj) => void;
}

const GuestPickerModal: React.FC<IGuestPickerModal> = ({
  guestDetails,
  dispatch,
  showModal,
  closeHandler,
  searchHandler,
}) => {
  const [roomDetails, setRoomDetails] = useState(guestDetails);
  const guestNumber = UtilityService.getGuestCount(roomDetails);


  const addRoom = () => {
    if (roomDetails.length < roomConfig.maximumRoomsperGuest) {
      setRoomDetails([
        ...roomDetails,
        {
          adult: 1,
          childrenAges: [],
        },
      ]);
    }
  };

  const removeRoom = (index) => {
    const temp = roomDetails.filter((room, idx) => idx !== index);
    if (roomDetails.length > 1) {
      setRoomDetails(temp);
    }
  };

  const updateGuestObj = () => {
    dispatch({
      type: actions.UPDATE_GUEST_OBJ,
      payload: roomDetails,
    });
    searchHandler(roomDetails);
  };

  const guestSpinnerCallback = (operation: string, index: number) => {
    const tempRoom = cloneDeep(roomDetails);  
    console.log("🚀 ~ file: guestPicker.tsx ~ line 57 ~ guestSpinnerCallback ~ tempRoom", tempRoom)
    let currentRoom = tempRoom[index];
    operation === "increment" ? currentRoom.adult++ : currentRoom.adult--;

    const temp = tempRoom.map((room, idx) => {
      if (idx !== index) {
        return room;
      } else {
        return currentRoom;
      }
    });

    tempRoom.splice(index, 1, currentRoom);

    setRoomDetails(temp);
  };

  const childrenSpinnerCallback = (operation: string, index: number) => {
    const tempRoom = cloneDeep(roomDetails); 
    let currentRoom = tempRoom[index];
    operation === "increment"
      ? currentRoom.childrenAges.push(0)
      : currentRoom.childrenAges.pop();

    const temp = tempRoom.map((room, idx) => {
      if (idx !== index) {
        return room;
      } else {
        return currentRoom;
      }
    });

    setRoomDetails(temp);
  };

  const removeChild = (roomIndex, ageIndex) => {
    const tempRoom = cloneDeep(roomDetails); 
    let currentRoom = tempRoom[roomIndex];
    const temp = currentRoom.childrenAges.filter(
      (room, idx) => idx !== ageIndex
    );

    const tempObj = tempRoom.map((room, idx) => {
      if (idx !== roomIndex) {
        return room;
      } else {
        return {
          adult: room.adult,
          childrenAges: temp,
        };
      }
    });

    setRoomDetails(tempObj);
  };

  const changeAge = (roomIndex, ageIndex, newAge) => {
    const tempRoom = cloneDeep(roomDetails); 
    let currentRoom = tempRoom[roomIndex];
    const temp = currentRoom.childrenAges.map((age, idx) =>
      idx === ageIndex ? +newAge : age
    );

    const tempObj = tempRoom.map((room, idx) => {
      if (idx !== roomIndex) {
        return room;
      } else {
        return {
          adult: room.adult,
          childrenAges: temp,
        };
      }
    });

    setRoomDetails(tempObj);
  };

  return (
    <Modal
      show={showModal}
      onHide={closeHandler}
      fullscreen="sm-down"
      dialogClassName="guest-picker-modal"
      animation={false}
      data-test="guest-picker-modal"
    >
      <div className="modal-header">
        <img
          className="close-btn"
          src="img/close.svg"
          alt=""
          onClick={closeHandler}
          data-test="close-btn"
        />
        <div className="title">Who is staying?</div>
      </div>
      <Modal.Body>
        <GuestPickerModalContainer>
          {roomDetails.map((room, index) => (
            <div className="room-section" key={index}>
              <div className="title-section d-flex justify-content-between align-items-center">
                <div className="room-title ">Rooom {index + 1}</div>
                {index > 0 && (
                  <button
                    data-test='remove-room'
                    className="btn remove-room"
                    onClick={() => {
                      removeRoom(index);
                    }}
                  >
                    Remove Room
                  </button>
                )}
              </div>
              <div className="d-flex justify-content-between add-guest-row">
                <div className="title">Adult</div>
                <div className="spinner-container">
                  <Spinner
                    maxValue={
                      roomConfig.maximumRoomOccupancy - room.childrenAges.length
                    }
                    minValue={roomConfig.minimumGuestPerRoom}
                    currentValue={room.adult}
                    handleOperation={guestSpinnerCallback}
                    index={index}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between add-guest-row">
                <div className="title">Children</div>
                <div className="spinner-container">
                  <Spinner
                    maxValue={roomConfig.maximumRoomOccupancy - room.adult}
                    minValue={roomConfig.minimumChildrenPerRoom}
                    currentValue={room.childrenAges.length}
                    handleOperation={childrenSpinnerCallback}
                    index={index}
                  />
                </div>
              </div>
              <div className="child-container">
                {room.childrenAges.map((age, i) => (
                  <div
                    className="age-selector d-flex justify-content-between align-items-center"
                    key={i}
                  >
                    <div> Child {i + 1} age</div>

                    <Form.Control
                      data-test='child-age-selector'
                      as="select"
                      size="lg"
                      custom
                      defaultValue={age}
                      className="age-select"
                      onChange={(e: any) => {
                        changeAge(index, i, e.target.value);
                      }}
                    >
                      {new Array(roomConfig.maximumAge)
                        .fill(0)
                        .map((_, index) => (
                          <option key={index} value={index}>
                            {index}
                          </option>
                        ))}
                    </Form.Control>
                    <button
                      className="btn"
                      onClick={() => {
                        removeChild(index, i);
                      }}
                    >
                      <img src="img/close-red.svg" alt="" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            className="btn btn-primary btn-block btn-add-room d-flex align-items-center justify-content-center"
            onClick={addRoom}
            disabled={roomDetails.length >= roomConfig.maximumRoomsperGuest}
            data-test="add-room"
          >
            <img src="img/plus.svg" alt="" />
            Add Room
          </button>
        </GuestPickerModalContainer>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-primary btn-block primary d-flex align-items-center justify-content-center search-btn"
          onClick={updateGuestObj}
          data-test="btn-search"
        >
          <img src="img/search.svg" alt="" />
          <span>
            Search {roomDetails.length} room{roomDetails.length ? "s" : ""}
            {" • "}
            {guestNumber} guest{guestNumber > 1 ? "s" : ""}
          </span>
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export { GuestPickerModal };
