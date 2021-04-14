import React, { FC, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ISender } from 'types';
import { POSTS_VIEW_PATH } from 'routing/routes';
import { SenderItem } from 'components/atoms/SenderItem';
import { navigate, useParams } from '@reach/router';

const Container = styled.section`
  display: flex;
`;

const Aside = styled.aside(({ theme }) => css`
  width: 15%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: ${theme.spacing(16)};
`);

const Main = styled.main(({ theme }) => css`
  width: 85%;
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  padding: ${theme.spacing(16)};
`);

interface ILayoutProps {
  senders: ISender[];
}

export const Layout: FC<ILayoutProps> = ({ senders, children }) => {
  const { id: activeId } = useParams();
  const handleClick = useCallback(
    (id: string) => navigate(POSTS_VIEW_PATH.replace(':id', id)),
    [senders],
  );

  return (
    <Container>
      <Aside>
        {senders.map(({ id, name, count }) => (
          <SenderItem
            key={id}
            name={name}
            count={count}
            onClick={() => handleClick(id)}
            isActive={id === activeId}
          />
        ))}
      </Aside>
      <Main>
        {children}
      </Main>
    </Container>
  );
};
