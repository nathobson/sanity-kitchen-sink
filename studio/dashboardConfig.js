export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed25e511c84489a15327a3e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-on6s444n',
                  apiId: 'c2103409-c1dd-45e5-8503-66337b081aa5'
                },
                {
                  buildHookId: '5ed25e518db2b8a30edbdd42',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cz16xrqa',
                  apiId: 'd311931f-1467-41cf-84ec-43d1dfd2e44b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathobson/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cz16xrqa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
