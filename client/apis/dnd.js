import request from 'superagent'

export const getNav         = ()     => { return request.get('https://www.dnd5eapi.co/api'        ).then(response => { return response.body }) }
export const getCategory    = (link) => { return request.get(`https://www.dnd5eapi.co/api/${link}`).then(response => { return response.body.results }) }
export const getIndividuals = (link) => { return request.get(`https://www.dnd5eapi.co/api/${link}`).then(response => { return response.body.results }) }
