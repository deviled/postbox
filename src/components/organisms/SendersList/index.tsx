import React, { FC } from 'react';
import { ISender } from 'types';
import { FlexCol } from 'components/atoms/Grid';
import { Toolbar } from 'components/molecules/Toolbar';
import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { navigate } from '@reach/router';
import { SENDER_PAGE_PATH } from 'routing/routes';
import { useSearch } from 'tools/hooks/useSearch';

interface ISendersList {
  senders: ISender[];
  activeId?: ISender['id'];
}

const DEFAULT_SENDERS: ISender[] = [];

const format = ({ name, posts }: Partial<ISender>) => `${name} (${posts.length})`;

export const SendersList: FC<ISendersList> = ({ activeId, senders = DEFAULT_SENDERS }) => {
  const { items, setSearch } = useSearch<ISender>(senders, ['name']);

  return (
    <FlexCol p={16} flex={1}>
      <Toolbar mb={32}>
        <Input
          width="100%"
          py={12}
          px={24}
          placeholder="Search ..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </Toolbar>
      <FlexCol data-testid="senders-list">
        {items.map(({ id, name, posts }) => (
          <Button
            data-testid={id}
            key={id}
            color="text"
            bgcolor={id === activeId ? 'info' : 'background'}
            mb={16}
            onClick={() => navigate(SENDER_PAGE_PATH.replace(':id', id))}
          >
            {format({ posts, name })}
          </Button>
        ))}
      </FlexCol>
    </FlexCol>
  );
};
