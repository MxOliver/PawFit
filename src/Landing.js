import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, H2 } from "@blueprintjs/core";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Landing extends Component {
	render() {
		return (
			<Row className="align-center-all full-width full-height">
				<Col sm={10} md={8} style={{ width: "35em" }}>
					<div className="text-center">
						<Card>
							<H2>Welcome to Pawfit!</H2>
							<p className="my-4">
								Whether you are looking to adopt your own furry friend, or a
								shelter hoping to show off your available pups, you have come to
								the perfect place.{" "}
							</p>
							<div className="gap-around">
								<Button intent="primary" className="gap-right-sm">
									<Link className="black-text" to="/user/index">
										Looking to Adopt
									</Link>
								</Button>
								<Button intent="success">
									<Link className="black-text" to="">
										Animal Shelters
									</Link>
								</Button>
							</div>
						</Card>
					</div>
				</Col>
			</Row>
		);
	}
}

export default Landing;

/// site intro and buttons leading to users landing and admin/shelter landing for sign in/sign up
