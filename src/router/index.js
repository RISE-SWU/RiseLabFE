import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/index';
import List from '../pages/list';
import Article from '../pages/article';
import People from '../pages/peoplelist';
import PeopleInfo from '../pages/people.vue';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
      {
          path: '/',
          name: 'home',
          component: Index
      },
      {
          path: '/list/:item',
          name: 'list',
          component: List
      },
      {
          path: '/article',
          name: 'article',
          component: Article
      },
      {
          path: '/people',
          name: 'people',
          component: People
      },
      {
          path: '/peopleInfo/:type',
          name: 'peopleInfo',
          component: PeopleInfo
      }
  ]
})
