import styled from "styled-components";

export const GuestPickerModalContainer = styled.div`
  .room-section {
    .title-section {
      margin-bottom: 18px;

      .room-title {
        font-family: "Inter";
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
      }

      .remove-room {
        font-family: "Inter";
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: right;
        color: #d83b3b;
        padding-right: 0;
      }
    }

    padding-bottom: 24px;
    padding-top: 22px;
    border-bottom: 1px solid #eff2f6;

    .add-guest-row {
      margin-bottom: 16px;

      .title {
        font-family: "Inter";
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
      }
    }

    .child-container {
      border-left: 1px solid #EFF2F6;
      .age-selector {
        padding-left: 8px;
        margin-bottom: 20px;
        .age-select {
          margin-left: auto;
          margin-right: 10px;
          width: 70px;
          padding: 3px 12px;
          height: 40px;
          border: 1px solid #bed2e9;
          box-sizing: border-box;
          border-radius: 6px;
        }
      }
    }

  }

  .btn-add-room {
    background: #f7fbff;
    border: 1px solid #dae9fa;
    box-sizing: border-box;
    border-radius: 6px;

    font-family: "Inter";
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    color: #0071f3;

    img {
      margin-right: 10.5px;
    }
  }
`;
