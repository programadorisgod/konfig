/*
splitit-web-api-v3

Splitit's Web API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { PurchaseMethod } from './purchase-method';

/**
 * 
 * @export
 * @interface PlanDataModel
 */
export interface PlanDataModel {
    /**
     * 
     * @type {number}
     * @memberof PlanDataModel
     */
    'TotalAmount': number;
    /**
     * 
     * @type {string}
     * @memberof PlanDataModel
     */
    'Currency'?: string;
    /**
     * 
     * @type {number}
     * @memberof PlanDataModel
     */
    'NumberOfInstallments'?: number;
    /**
     * 
     * @type {string}
     * @memberof PlanDataModel
     */
    'TerminalId'?: string;
    /**
     * 
     * @type {PurchaseMethod}
     * @memberof PlanDataModel
     */
    'PurchaseMethod': PurchaseMethod;
    /**
     * 
     * @type {string}
     * @memberof PlanDataModel
     */
    'RefOrderNumber'?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof PlanDataModel
     */
    'ExtendedParams'?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof PlanDataModel
     */
    'FirstInstallmentAmount'?: number;
    /**
     * 
     * @type {string}
     * @memberof PlanDataModel
     */
    'FirstInstallmentDate'?: string;
}
