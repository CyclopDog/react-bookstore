const source = 'local'

let apiUrl = ''

switch (source) {
  case 'local':
    apiUrl = 'http://localhost:3000'
    break;

  case 'heroku':
    apiUrl = 'https://secret-meadow-93147.herokuapp.com'
    break;

  default:
    break;
}

export { apiUrl }