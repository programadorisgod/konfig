/*
Carbon

Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrganizationUserDataSourceAPI } from './organization-user-data-source-api';

/**
 * 
 * @export
 * @interface OrganizationUserDataSourceResponse
 */
export interface OrganizationUserDataSourceResponse {
    /**
     * 
     * @type {Array<OrganizationUserDataSourceAPI>}
     * @memberof OrganizationUserDataSourceResponse
     */
    'results': Array<OrganizationUserDataSourceAPI>;
    /**
     * 
     * @type {number}
     * @memberof OrganizationUserDataSourceResponse
     */
    'count': number;
}
