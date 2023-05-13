import * as React from 'react';
import {Box , Tabs, Tab, Typography} from '@mui/material';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {indigo, red, pink, green, lime }  from '@mui/material/colors';
import Theme from '../../helpers/theme'
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import theme from '../../helpers/theme';

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/about">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/about']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(['/home/:id', '/about', '/blogs', '/notification','/git','/linkedin','/instagram' ]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab color='primary' icon={<HomeIcon style={{color: green[700]}}/>} label="Home" value="/home/:id" to="/home/1" component={Link} />
      <Tab icon={<InfoIcon style={{color: lime['A700']}}/>}label="About" value="/about" to="/about" component={Link}/>
      <Tab icon={<BookRoundedIcon style={{color: 'red'}} />} label="Blogs" value="/blogs" to="/blogs" component={Link} />
      <Tab icon={<NotificationsRoundedIcon style={{color: green[700]}}/>} label="New" value="/notification" to="/notification" component={Link} />
      <Tab icon={<GitHubIcon/>} label="github" value="/git" to="/git" component={Link} />
      <Tab icon={<LinkedInIcon style={{color: indigo['A700']}}/>} label="linkedin" value="/linkedin" to="/linkedin" component={Link} />
      <Tab icon={<InstagramIcon style={{color: pink['A400']}}/>} label="instagram" value="/instagram" to="/instagram" component={Link} />

    </Tabs>
  );
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body2" sx={{ pb: 2 }} color={Theme.palette.secondary.light}>
      Current route: {location.pathname}
    </Typography>
  );
}

export default function TabsRouter() {
  return (
    <Router>
      <Box sx={{ width: '100%' }}>
        <Routes>
          <Route path="*" element={<CurrentRoute />} />
        </Routes>
        <MyTabs />
      </Box>
    </Router>
  );
}