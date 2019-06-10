import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { submit } from "redux-form";
import Table from "./table";
import Hikeform from "./form";
import { toggleModal } from "./../config/action";
const Wrapper = props => {
  //   const [show, setShow] = useState(false);
  const { show } = props;

  const { dispatch } = props;

  return (
    <Fragment>
      <div className="head">
        <div className="container">
          <div className="pull-right user-dtls">
            <p>Hi Mike</p>
            <span className="user-icon">
              <i className="fas fa-user" />
            </span>
          </div>

          <h4 className="logo">
            Peak<span>Bag</span>
          </h4>
        </div>
      </div>
      <div className="container">
        <h3>Hike Details</h3>
        <Button
          className="pull-right"
          variant="success"
          onClick={() => toggleModal(true)}
        >
          Add Hike <i className="fas fa-plus" />
        </Button>
        <div>
          <Table />
        </div>

        <Modal show={show} onHide={() => toggleModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Hike Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Hikeform />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => toggleModal(false)}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => dispatch(submit("hikeform"))}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
};

export default connect(state => ({
  show: state.show
}))(Wrapper);
