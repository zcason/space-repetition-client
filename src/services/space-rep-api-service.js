import TokenService from './token-service'
import config from '../config'

const SpaceRepApiService = {

    getLanguageDets() {
        return fetch(`${config.API_ENDPOINT}/language`, {
            headers: { 'authorization': `bearer ${TokenService.getAuthToken()}` }
        })
            .then(res => (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    }
}

export default SpaceRepApiService;