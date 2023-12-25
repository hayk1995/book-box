import { BsBandaid, BsFillPersonLinesFill, BsCalendar2Date, BsCalendar3 } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';
import SidenavProvider from '../../components/SideNavContext';
import SidenavContainer from '../../components/SideNavContainer';
import Sidenav from '../../components/SideNav';
import Navbar from '../../components/Navbar';
import ItemList from "./ItemList";


export default function Index() {
  const navItems = [
    { icon: BsBandaid, label: 'Services', to: '' },
    { icon: BsCalendar2Date, label: 'Appointments', to: 'appointments' },
    { icon: BsCalendar3, label: 'Availability', to: 'availability' },
    { icon: BsFillPersonLinesFill, label: 'Clients', to: 'clients' }
  ];
  return (
    <SidenavProvider>
      <SidenavContainer sidenav={<Sidenav navItems={navItems} />}>
        <main>
          <div className='App'>
            <h1>Hello CodeSandbox!</h1>
            <h2>Start editing to see some magic happen!</h2>
            <Navbar />
            <ItemList />
          </div>
        </main>
      </SidenavContainer>
    </SidenavProvider>
  );
}

