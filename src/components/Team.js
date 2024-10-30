import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

function Team() {
  return (
    <section id="team" className="my-5">
      <h2>Our Team</h2>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Dr. Jane Doe</Card.Title>
            <Card.Text>Head of Laboratory</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Dr. John Smith</Card.Title>
            <Card.Text>Senior Lab Technician</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </section>
  );
}

export default Team;