export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-test-baku-studio',
                  apiId: '2bf3b60d-d1a5-4230-86d9-9e432d37a4d8'
                },
                {
                  buildHookId: '5ebda8ddaa0e3169a357aea7',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-test-baku',
                  apiId: '0e5c2b66-6c48-4b6a-b2dc-4e231e52b622'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bakumn/sanity-nuxt-events-test-baku',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-test-baku.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
