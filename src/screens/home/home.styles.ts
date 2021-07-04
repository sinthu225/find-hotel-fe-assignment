import styled from "styled-components";

export const HomePageContainer = styled.div`
  height: 100vh;
  background-image: url(img/home.png);
  margin-top: -48px;
  padding-top: 48px;
  background-repeat: no-repeat;

  @media (min-width: 450px) {
    background-size: cover;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 26px;
    line-height: 36px;
    margin-top: 93px;
    width: 60%;
  }

  .search-container {
    padding: 12px 8px;
    background: #ffffff;
    box-shadow: 0px 0px 1px rgba(68, 80, 95, 0.08),
      0px 1px 4px rgba(68, 80, 95, 0.2);
    border-radius: 8px;
    box-sizing: border-box;
    margin-top: 140px;

    .input-wrapper {
      background: #ffffff;
      height: 40px;
      border: 1px solid #a0bcdb;
      border-radius: 6px;
      width: 100%;
      margin-bottom: 12px;

      &.search {
        position: relative;
        &::before {
          position: absolute;
          content: "";
          display: block;
          height: 11px;
          width: 8.5px;
          background-image: url("img/pin.svg");
          top: 13px;
          left: 13px;
        }
        &::after {
          position: absolute;
          content: "";
          display: block;
          height: 15px;
          width: 15px;
          background-image: url("img/location.svg");
          top: 13px;
          right: 13px;
        }
      }

      &.guest-picker {
        margin-left: 12px;
        width: 61px;
        padding-left: 36px;
        position: relative;
        box-sizing: border-box;

        .lbl {
          font-family: "Inter";
          font-weight: 600;
          font-size: 15px;
          line-height: 24px;
        }

        &::before {
          position: absolute;
          content: "";
          display: block;
          height: 11px;
          width: 15px;
          background-image: url("img/guest.svg");
          top: 13px;
          left: 13px;
        }
      }

      input {
        padding-left: 36px;
        border: none;
        width: 100%;
        height: 100%;
        border-radius: 6px;

        &::placeholder {
          font-family: "Inter";
          font-weight: 600;
          font-size: 15px;
          color: #a3acb8;
        }
      }
    }

    .check-in-checkout {
      position: relative;
      &::before {
        position: absolute;
        content: "";
        display: block;
        height: 12px;
        width: 12px;
        background-image: url("img/calendar.svg");
        top: 13px;
        left: 13px;
      }
    }

    .search-btn {
      background: #0077ff;
      border-radius: 6px;
      height: 40px;
      padding: 8px;
      font-family: "Inter";
      font-weight: bold;
      font-size: 15px;
      line-height: 20px;
      color: #ffffff;
      border: none;
      width: 100%;
    }
  }

  .logos-container {
    margin-top: 35px;
    img {
      margin: 0 10px;
    }
  }
`;
