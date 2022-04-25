import React from 'react';
import { A } from '../../../styles/styles';
import { StyledIcon } from './styled';
import Button from '../../Button';
import { Instagram, Facebook } from 'react-feather';

const socials = {
  Instagram,
  Facebook,
};

const SocialLinks = ({ links }) => (
  <>
    {links.map((link) => (
      <A key={link.text.text} href={link.url.url} target="_blank">
        <Button secondary>
          <StyledIcon as={socials[link.type]} />
          {` ${link.text.text}`}
        </Button>
      </A>
    ))}
  </>
);

export default SocialLinks;
