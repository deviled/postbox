import React, { FC, useCallback } from 'react';
import { ISender } from 'types';
import { FlexCol } from 'components/atoms/Grid';
import { Toolbar } from 'components/molecules/Toolbar';
import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { navigate } from '@reach/router';
import { SENDER_PAGE_PATH } from 'routing/routes';

interface ISendersList {
  senders: ISender[];
  activeId?: ISender['id'];
}

const DEFAULT_SENDERS: ISender[] = [];

const format = ({ name, count }: Partial<ISender>) => `${name} (${count})`;

export const SendersList: FC<ISendersList> = ({ activeId, senders = DEFAULT_SENDERS }) => {
  const handleClick = useCallback((id: string) => navigate(SENDER_PAGE_PATH.replace(':id', id)), []);

  return (
    <FlexCol p={16} flex={1}>
      <Toolbar mb={32}>
        <Input
          width="100%"
          py={12}
          px={24}
          placeholder="Search ..."
        />
      </Toolbar>
      <FlexCol data-testid="senders-list">
        {senders.map(({ id, name, count }) => (
          <Button
            data-testid={id}
            key={id}
            color="text"
            bgcolor={id === activeId ? 'info' : 'background'}
            mb={16}
            onClick={() => handleClick(id)}
          >
            {format({ count, name })}
          </Button>
        ))}
      </FlexCol>
    </FlexCol>
  );
};
