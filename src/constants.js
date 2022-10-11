export const endpoints = {
  bodies: 'https://api.le-systeme-solaire.net/rest/bodies'
}

export const colors = {
  mercure: '#FFBFAB',
  venus:   '#E7F6A7',
  terre:   '#1E84FD',
  mars:    '#FD531E',
  jupiter: '#FF9E44',
  saturne: '#F5D86D',
  uranus:  '#CBFFF3',
  neptune: '#2CD8FE',
  moon:    '#A7A7A7'
}

export const planets = [
  {id: 'mercure', name: 'Mercury', color: colors.mercure},
  {id: 'venus',   name: 'Venus',   color: colors.venus},
  {id: 'terre',   name: 'Earth',   color: colors.terre},
  {id: 'mars',    name: 'Mars',    color: colors.mars},
  {id: 'jupiter', name: 'Jupiter', color: colors.jupiter},
  {id: 'saturne', name: 'Saturn',  color: colors.saturne},
  {id: 'uranus',  name: 'Uranus',  color: colors.uranus},
  {id: 'neptune', name: 'Neptune', color: colors.neptune},
]