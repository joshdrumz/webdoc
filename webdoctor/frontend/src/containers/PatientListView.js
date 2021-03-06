import React, { Component } from 'react';
import Patient from '../components/Patient';
import axios from 'axios';
// import {
//   Card,
//   Button,
//   CardTitle,
//   CardText,
//   CardDeck,
//   CardSubtitle,
//   CardBody,
//   Container
// } from 'reactstrap';

class PatientList extends Component {
  state = {
    patients: []
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/patient/').then(res => {
      this.setState({
        patients: res.data
      });
    });
  }

  render() {
    return (
      <>
        <Patient data={this.state.patients} />
        {/* {this.state.patients.map(item => (
          <Container key={item.patient_id}>
            <CardDeck>
              <Card>
                <CardBody>
                  <CardTitle>
                    <strong>{`${item.first_name} ${item.last_name}`}</strong>
                  </CardTitle>
                  <CardSubtitle>
                    <strong>Email:</strong> {item.email}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>New Patient Date:</strong>{' '}
                    {item.new_patient_date.slice(0, 10)}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>City:</strong> {item.city}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Phone:</strong> {item.phone}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>DOB:</strong> {item.dob}
                  </CardSubtitle>
                  <CardText>text</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </CardDeck>
          </Container>
        ))} */}
      </>
    );
  }
}

export default PatientList;
