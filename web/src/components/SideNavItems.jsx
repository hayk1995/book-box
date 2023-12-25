import PropTypes from 'prop-types';
import { List, ListItem, Icon, Flex, Text, Link, Tooltip, IconButton } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export function SideNavItems({navItems, mode}) {
  const sidebarItemInOverMode = (item, index) => (
    <ListItem key={index}>
      <Link
        display='block'
        as={NavLink}
        to={item.to}
        _focus={{ bg: 'gray.100' }}
        _hover={{
          bg: 'gray.200'
        }}
        _activeLink={{ bg: 'orange.500', color: 'white' }}
        w='full'
        borderRadius='md'
      >
        <Flex alignItems='center' p={2}>
          <Icon boxSize='5' as={item.icon} />
          <Text ml={2}>{item.label}</Text>
        </Flex>
      </Link>
    </ListItem>
  );
  const sidebarItemInSemiMode = (
    { icon: Icon, ...item },
    index
  ) => (
    <ListItem key={index}>
      <Tooltip label={item.label} placement='right'>
        <IconButton
          key={index}
          as={NavLink}
          _focus={{ bg: 'gray.100' }}
          _activeLink={{ boxShadow: 'md', bg: 'orange.500', color: 'white' }}
          bg='transparent'
          aria-label={item.label}
          borderRadius='xl'
          icon={<Icon />}
          to={item.to}
        />
      </Tooltip>
    </ListItem>
  );
  return (
    <List spacing={3}>
      { mode !== 'over'
        ? navItems.map((item, index) => sidebarItemInSemiMode(item, index))
        : navItems.map((item, index) => sidebarItemInOverMode(item, index))}
    </List>
  );
}

SideNavItems.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.any,
    label: PropTypes.string,
    to: PropTypes.string
  })),
  mode: PropTypes.oneOf(['semi', 'over'])
}

export default SideNavItems;