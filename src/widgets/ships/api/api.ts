import {instance} from "shared/api/axiosInstance"
import {QueryParamsType} from "../model/types";

export const api = {
    async getAll(queryParams: QueryParamsType) {
        return instance.get('ships?limit=5', {
                params: queryParams
            }
        )
    }
}