import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login/login';
// import Home from '@/components/home/home';
// import List from '@/components/list/list';
// import Watched from '@/components/watched/watched';
// import Liked from '@/components/liked/liked';
// import Add from '@/components/add/add';
const Login = (resolve) => {
  import('@/components/login/login').then(login => {
    resolve(login);
  });
};
const Home = (resolve) => {
  import('@/components/home/home').then((home) => {
    resolve(home);
  });
};
const Watched = (resolve) => {
  import('@/components/watched/watched').then(watched => {
    resolve(watched);
  });
};
const List = (resolve) => {
  import('@/components/list/list').then(list => {
    resolve(list);
  });
};
const Liked = (resolve) => {
  import('@/components/liked/liked').then(liked => {
    resolve(liked);
  });
};
const Add = (resolve) => {
  import('@/components/add/add').then(add => {
    resolve(add);
  });
};
const Detail = (resolve) => {
  import('@/components/docdetail/docdetail').then(detail => {
    resolve(detail);
  });
};
const Doc = (resolve) => {
  import('@/components/doc/doc').then(doc => {
    resolve(doc)
  })
}

import FastClick from 'fastclick';
FastClick.attach(document.body);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/watched',
      children: [
        { path: '/watched', component: Watched },
        { path: '/list', component: List },
        { path: '/liked', component: Liked },
      ]
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/doc/:data/:tab',
      component: Doc
    }
  ]
})
