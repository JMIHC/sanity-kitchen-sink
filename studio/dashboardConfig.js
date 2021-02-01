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
                  buildHookId: '601867a9ce139e00e9c0fb8c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9sb1dpfa',
                  apiId: 'ea2c77ba-04bb-436e-935a-41ca797ba306'
                },
                {
                  buildHookId: '601867a9843ab90ada2422ed',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kfg1wgdz',
                  apiId: '6b07522e-4e41-4887-8398-cb60694a98c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JMIHC/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kfg1wgdz.netlify.app', category: 'apps'}
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
