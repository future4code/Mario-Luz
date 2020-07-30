import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars2.githubusercontent.com/u/60905208?s=400&u=f616bf9044f7835bf7ec1266162bc9998680ee65&v=4" alt="Mario Luz" />
      Mario Luz
    </User>
  </Container>
);

export default Header;
