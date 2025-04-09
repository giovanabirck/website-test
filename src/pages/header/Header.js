import { Link, useLocation } from 'react-router-dom';
import './Header.modules.css';

const Header = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    const formatSegment = (segment) => {
        return segment
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    const crumbs = [
        <Link key="home" to="/" className="header_link">
            Giovana Birck
        </Link>,
    ];

    let accumulatedPath = '';
    pathSegments.forEach((segment, index) => {
        accumulatedPath += `/${segment}`;
        crumbs.push(
            <span key={index}>
                {' / '}
                <Link to={accumulatedPath} className="header_link">
                    {formatSegment(segment)}
                </Link>
            </span>
        );
    });

    return <h1>{crumbs}</h1>;
};

export default Header;