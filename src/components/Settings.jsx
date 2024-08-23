import { Component } from "react";
import avatar from "../assets/img/avatar.png";
import paypal from "../assets/img/images.png";
import { Container, Row, Col, Button } from "react-bootstrap";

class Settings extends Component {
  render() {
    return (
      <>
        <Container fluid className="py-3">
          <Row>
            <Col
              xs={12}
              className="border border-1 border-dark border-top-0 border-start-0 border-end-0 mb-3"
            >
              <p className="fs-2">Account</p>
            </Col>
            <Col
              xs={4}
              className="border border-1 border-dark border-top-0 border-start-0 border-end-0 mb-3"
            >
              <p className="text-secondary">MEMBERSHIP & BILLING</p>
              <Button className="border-0 p-2">Cancel Membership</Button>
            </Col>
            <Col xs={8} className="justify-content-between ">
              <Row className="border border-1 border-dark border-top-0 border-start-0 border-end-0 mb-3">
                <Col xs={6}>
                  <p className="fw-semibold my-0">student@strive.school</p>
                  <p className="text-secondary my-0">Password: ********</p>
                  <p className="text-secondary my-0">Phone: 321 044 1279</p>
                </Col>
                <Col xs={6}>
                  <p className="my-0 text-chit">Change account email</p>
                  <p className="my-0 text-chit">Change password</p>
                  <p className="mt-0 text-chit">Change phone number</p>
                </Col>
              </Row>
              <Row className="border border-1 border-dark border-top-0 border-start-0 border-end-0 mb-3">
                <Col xs={6}>
                  <p className="fw-semibold">
                    <img src={paypal} alt="paypal" className="me-2 avatar" />
                    PayPal admin@strive.school
                  </p>
                </Col>
                <Col xs={6}>
                  <p className="my-0 text-chit">Update payment info</p>
                  <p className="mt-0 text-chit">Billing details</p>
                </Col>
                <Col xs={6}></Col>
                <Col xs={6}>
                  <p className="my-0 text-chit">
                    Redeem gift card or promo code
                  </p>
                  <p className="mt-0 text-chit">Where to buy gift cards</p>
                </Col>
              </Row>
            </Col>
            <Col
              xs={4}
              className="border border-1 border-dark border-top-0 border-start-0 border-end-0 mb-3"
            >
              <p className="text-secondary">PLAN DETAILS</p>
            </Col>
            <Col xs={8} className="justify-content-between ">
              <Row className="border border-1 border-dark border-top-0 border-start-0 border-end-0 mb-3">
                <Col xs={6}>
                  <p className="fw-semibold">
                    Premium{" "}
                    <span className="fw-light  rounded border border-1 border-dark">
                      ULTRA <span className="fw-medium">HD</span>
                    </span>
                  </p>
                </Col>
                <Col xs={6}>
                  <p className="text-chit">Change plan</p>
                </Col>
              </Row>
            </Col>
            <Col
              xs={4}
              className="border border-1 border-dark border-top-0 border-start-0 border-end-0 mb-3"
            >
              <p className="text-secondary">SETTINGS</p>
            </Col>
            <Col xs={8} className="justify-content-between ">
              <Row className="border border-1 border-dark border-top-0 border-start-0 border-end-0 mb-3">
                <Col xs={6}>
                  <p className="my-0 text-chit">Parental controls</p>
                  <p className="my-0 text-chit">Test partecipation</p>
                  <p className="my-0 text-chit">Manage download devices</p>
                  <p className="my-0 text-chit">Activate a device</p>
                  <p className="my-0 text-chit">
                    Recent device streaming activity
                  </p>
                  <p className="mt-0 text-chit">Sign out of all your devices</p>
                </Col>
                <Col xs={6}></Col>
              </Row>
            </Col>
            <Col xs={4}>
              <p className="text-secondary">MY PROFILE</p>
            </Col>
            <Col xs={8} className="justify-content-between ">
              <Row>
                <Col xs={12}>
                  <p className="fw-semibold">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="me-2 avatar"
                    />
                    Strive Student
                  </p>
                </Col>
                <Col xs={4}>
                  <p className="my-0 text-chit">Language</p>
                  <p className="my-0 text-chit">Playback settings</p>
                  <p className="my-0 text-chit">Subtitle appearance</p>
                </Col>
                <Col xs={4}>
                  <p className="my-0 text-chit">Viewing activity</p>
                  <p className="my-0 text-chit">Ratings</p>
                </Col>

                <Col xs={4}>
                  <p className="my-0 text-chit">Manage profiles</p>
                  <p className="my-0 text-chit">Add profile email</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Settings;
