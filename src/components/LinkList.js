import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import LinkItem from "./LinkItem";
import { links } from '../common/links';

const LinkList = () => {
  return (
    <ListGroup style={{ backgroundColor: "#f5f5f5" }}>
      {links.map((link) => (
        <LinkItem key={link.id} link={link}>
          <Button variant="outline-primary" size="sm">
            {link.title}
          </Button>
        </LinkItem>
      ))}
    </ListGroup>
  );
};

export default LinkList;

