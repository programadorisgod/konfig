/*
Carbon

Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ResyncFileQueryInput
 */
export interface ResyncFileQueryInput {
    /**
     * 
     * @type {number}
     * @memberof ResyncFileQueryInput
     */
    'file_id': number;
    /**
     * 
     * @type {number}
     * @memberof ResyncFileQueryInput
     */
    'chunk_size'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ResyncFileQueryInput
     */
    'chunk_overlap'?: number | null;
}
