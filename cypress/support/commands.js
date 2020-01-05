Cypress.Commands.add('setLocalStorage', () => {
  window.localStorage.setItem('WWW', JSON.stringify({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InducjIxMkBnbWFpbC5jb20iLCJuYW1lIjoiSHllamluIEtpbSIsIl9pZCI6IjVkYWQ1MTUyNGRhNzA4ZjRmMGVlODhhMCIsImlhdCI6MTU3ODIwNDQ5MSwiZXhwIjoxNTc4ODA5MjkxfQ.TYNyYsZNKj49BHF6llunkrV7bpATiJUAnbZ72gl4l4s" }));
  cy.visit('localhost:3000')
})
