export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '633d5f05808d35772b276ac3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-test-2-studio',
                  apiId: 'ade1b930-c62b-49bf-9f0b-cec59408f57d'
                },
                {
                  buildHookId: '633d5f0506559e74c5f0ce91',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-test-2',
                  apiId: 'f7c99756-fedb-4ace-b3d6-4d25ce17ed0c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomasm/sanity-nextjs-landing-test2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-test-2.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
