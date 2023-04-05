import {instance} from "shared/api/axiosInstance"
import {QueryParamsModelType} from "../model/types";

export const api = {
    async getAll(queryParams: QueryParamsModelType) {
        return instance.get('ships?limit=5', {
                params: queryParams
            }
        )
    }
}