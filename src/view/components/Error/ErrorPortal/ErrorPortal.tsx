import { FC } from "react";
import { Header, Segment, TransitionablePortal } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import PropTypes from "prop-types";
import { clearError } from "src/store/error";
import "./ErrorPortal.scss";

interface IProps {}

export const ErrorPortal: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const { openDialog, title, message } = useAppSelector(
    (state) => state.errorReducer
  );

  const handleClose = () => {
    dispatch(clearError());
  };

  return (
    <TransitionablePortal
      open={openDialog}
      transition={{ animation: "browse right", duration: 500 }}
      onClose={handleClose}
      openOnTriggerClick
    >
      <Segment
        color="red"
        style={{
          left: "40%",
          position: "fixed",
          top: "12%",
          zIndex: 1000,
          width: "400px",
          height: "120px",
        }}
      >
        <h4>{title}</h4>
        <h5>{message}</h5>
      </Segment>
    </TransitionablePortal>
  );
};

ErrorPortal.propTypes = {
  openDialog: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
};
