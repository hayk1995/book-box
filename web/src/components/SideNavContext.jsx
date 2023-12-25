import { useDisclosure } from '@chakra-ui/react';
import { createContext, useContext } from 'react';

const SideNavContext = createContext(
  null
);

export function useSidenav() {
  const sidebar = useContext(SideNavContext);
  if (!sidebar) {
    throw new Error('Cannot use `sidebar context` outside SidebarProvider');
  }
  return { ...(sidebar) };
}

export function SidenavProvider({
                                  children,
                                  ...props
                                }) {
  const disclosure = useDisclosure();
  return (
    <SideNavContext.Provider value={{ ...disclosure }} {...props}>
      {children}
    </SideNavContext.Provider>
  );
}

export default SidenavProvider;
