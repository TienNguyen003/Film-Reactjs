import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Blog from '~/pages/Blog/Blog';
import Login from '~/pages/Login/Login';
import Signup from '~/pages/Signup/Signup';
import Info from '~/pages/InfoUser/Info';
import DetailMovie from '~/components/DetailMovie/DetailMovie';
import Genres from '~/components/Genres/Genres';
import WatchMovie from '~/components/WatchMovie/WatchMovie';
import BlogDetail from '~/components/BlogDetail/BlogDetail';
import ChangePass from '~/components/ChangePass/ChangePass';
import Shop from '~/components/Shop/Shop';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.detailMovie, component: DetailMovie },
    { path: config.routes.genres, component: Genres },
    { path: config.routes.watch, component: WatchMovie },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blogDetail, component: BlogDetail },
    { path: config.routes.login, component: Login },
    { path: config.routes.signup, component: Signup },
    { path: config.routes.info, component: Info },
    { path: config.routes.changePass, component: ChangePass },
    { path: config.routes.shop, component: Shop },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
