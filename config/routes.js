const routes = module.exports = require('next-routes')()

routes
.add('about')
.add('article', '/article/:id', 'article')
.add('articles', 'articles', 'articles')
.add('editarticle', '/article/:id/edit', 'editarticle')
.add('newarticle', '/article/new', 'createArticle')
.add('user', '/user/:id', 'user')
.add('users', '/users', 'users')
.add('newuser','/user/new','createUser')
.add('login')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})
