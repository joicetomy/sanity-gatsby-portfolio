export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6314fa1e67cd572a750f77bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ixfix39g',
                  apiId: 'c3174f0f-7061-4e42-bbd6-a88686983b32'
                },
                {
                  buildHookId: '6314fa1fc38f7427d9439e77',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7x3y26pz',
                  apiId: '047faabb-e228-435c-95d6-5f4f4edfc763'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joicetomy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7x3y26pz.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
