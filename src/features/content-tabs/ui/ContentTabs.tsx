import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

const ContentTabs = () => {
  const location = useLocation();
  const isHome = location.pathname === '/home';

  return (
    <div className="inline-flex gap-1 bg-gray-600  w-fit rounded-full p-1 mb-6">
      <NavLink to="/home" className="relative z-10 px-4 py-2 text-sm font-medium rounded-full">
        <span className={`relative z-10 ${isHome ? 'text-gray-900' : 'text-gray-200'}`}>
          Home
        </span>
        {isHome && (
          <motion.div
            layoutId="active-tab-bubble"
            className="absolute inset-0 bg-white rounded-full shadow"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
          />
        )}
      </NavLink>
      <NavLink to="/trending" className="relative z-10 px-4 py-2 text-sm font-medium rounded-full">
        <span className={`relative z-10 ${!isHome ? 'text-gray-900' : 'text-gray-200'}`}>
          Trending
        </span>
        {!isHome && (
          <motion.div
            layoutId="active-tab-bubble"
            className="absolute inset-0 bg-white rounded-full shadow"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
          />
        )}
      </NavLink>
    </div>
  );
};

export default ContentTabs;