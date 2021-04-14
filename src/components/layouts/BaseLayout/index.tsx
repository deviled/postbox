import React, { FC, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ISender } from 'types';
import { POSTS_VIEW_PATH } from 'routing/routes';
import { SenderItem } from 'components/atoms/SenderItem';
import { navigate, useParams } from '@reach/router';

const StyledContainer = styled.section`
  display: flex;
`;

const StyledAside = styled.aside(({ theme }) => css`
  width: 15%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: ${theme.spacing(16)};
`);

const StyledMain = styled.main(({ theme }) => css`
  width: 85%;
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  padding: ${theme.spacing(16)};
`);

interface IBaseLayoutProps {
  senders: ISender[];
}

export const BaseLayout: FC<IBaseLayoutProps> = ({ senders, children }) => {
  const { id: activeId } = useParams();

  const handleClick = useCallback(
    (id: string) => navigate(POSTS_VIEW_PATH.replace(':id', id)),
    [senders],
  );

  return (
    <StyledContainer>
      <StyledAside>
        {senders.map(({ id, name, count }) => (
          <SenderItem
            data-testid={id}
            key={id}
            name={name}
            count={count}
            onClick={() => handleClick(id)}
            isActive={id === activeId}
          />
        ))}
      </StyledAside>
      <StyledMain>{children}</StyledMain>
    </StyledContainer>
  );
};
