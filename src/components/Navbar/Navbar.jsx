import { MOBILE_QUERY, useMediaQuery } from '../../hooks/useMediaQuery';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

/** Elige qué navbar mostrar según el ancho de pantalla. Cada uno vive en su propio archivo. */
const Navbar = () => (useMediaQuery(MOBILE_QUERY) ? <MobileNavbar /> : <DesktopNavbar />);

export default Navbar;
