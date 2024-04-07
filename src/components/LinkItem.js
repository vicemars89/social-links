import React from 'react';
import { ListGroup } from 'react-bootstrap';

const LinkItem = () => {
  return (
    <ListGroup.Item>
      <a href={link.url} target="_blank">
        {link.icon} {link.title}
      </a>
    </ListGroup.Item>
  );
};

export default LinkItem;
