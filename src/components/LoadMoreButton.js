import React from 'react';
import { Button } from 'semantic-ui-react';

const LoadMoreButton = (props) => (
  <Button primary size='massive' attached='bottom' onClick={() => props.handleClick() }>Load More Movies</Button>
)

export default LoadMoreButton;