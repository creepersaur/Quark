import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/quark/__docusaurus/debug',
    component: ComponentCreator('/quark/__docusaurus/debug', 'e7d'),
    exact: true
  },
  {
    path: '/quark/__docusaurus/debug/config',
    component: ComponentCreator('/quark/__docusaurus/debug/config', '31b'),
    exact: true
  },
  {
    path: '/quark/__docusaurus/debug/content',
    component: ComponentCreator('/quark/__docusaurus/debug/content', 'c01'),
    exact: true
  },
  {
    path: '/quark/__docusaurus/debug/globalData',
    component: ComponentCreator('/quark/__docusaurus/debug/globalData', '5d3'),
    exact: true
  },
  {
    path: '/quark/__docusaurus/debug/metadata',
    component: ComponentCreator('/quark/__docusaurus/debug/metadata', 'dfe'),
    exact: true
  },
  {
    path: '/quark/__docusaurus/debug/registry',
    component: ComponentCreator('/quark/__docusaurus/debug/registry', '55a'),
    exact: true
  },
  {
    path: '/quark/__docusaurus/debug/routes',
    component: ComponentCreator('/quark/__docusaurus/debug/routes', '776'),
    exact: true
  },
  {
    path: '/quark/markdown-page',
    component: ComponentCreator('/quark/markdown-page', '85f'),
    exact: true
  },
  {
    path: '/quark/docs',
    component: ComponentCreator('/quark/docs', '38d'),
    routes: [
      {
        path: '/quark/docs',
        component: ComponentCreator('/quark/docs', '542'),
        routes: [
          {
            path: '/quark/docs',
            component: ComponentCreator('/quark/docs', '844'),
            routes: [
              {
                path: '/quark/docs/Animations/Springs',
                component: ComponentCreator('/quark/docs/Animations/Springs', '5b5'),
                exact: true
              },
              {
                path: '/quark/docs/Animations/Tweens',
                component: ComponentCreator('/quark/docs/Animations/Tweens', '999'),
                exact: true
              },
              {
                path: '/quark/docs/GettingStarted',
                component: ComponentCreator('/quark/docs/GettingStarted', '2c3'),
                exact: true
              },
              {
                path: '/quark/docs/New',
                component: ComponentCreator('/quark/docs/New', 'f7e'),
                exact: true
              },
              {
                path: '/quark/docs/PremadeUI',
                component: ComponentCreator('/quark/docs/PremadeUI', 'f1f'),
                exact: true
              },
              {
                path: '/quark/docs/Reactivity',
                component: ComponentCreator('/quark/docs/Reactivity', 'cb4'),
                exact: true
              },
              {
                path: '/quark/docs/Scopes',
                component: ComponentCreator('/quark/docs/Scopes', '2e2'),
                exact: true
              },
              {
                path: '/quark/docs/Stories',
                component: ComponentCreator('/quark/docs/Stories', 'c5b'),
                exact: true
              },
              {
                path: '/quark/docs/StyleSheets',
                component: ComponentCreator('/quark/docs/StyleSheets', 'c95'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/quark/',
    component: ComponentCreator('/quark/', 'f96'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
