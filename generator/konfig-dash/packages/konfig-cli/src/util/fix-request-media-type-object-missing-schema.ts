import { Spec, getOperations, resolveRef } from 'konfig-lib'

export async function fixRequestMediaTypeObjectMissingSchema({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfMissingRequestSchemasInMediaTypeObjects = 0
  getOperations({ spec: spec.spec }).forEach(({ operation }) => {
    if (operation.requestBody) {
      const requestBody = resolveRef({
        refOrObject: operation.requestBody,
        $ref: spec.$ref,
      })
      if (requestBody.content === undefined || requestBody.content === null) {
        throw Error(
          `Missing content in request body for ${operation.operationId}`
        )
      }
      Object.values(requestBody.content).forEach((mediaTypeObject) => {
        if (!mediaTypeObject.schema) {
          mediaTypeObject.schema = {
            description:
              'WARNING: Missing schema in media type object. Missing schema has been filled with this AnyType schema.',
          }
          numberOfMissingRequestSchemasInMediaTypeObjects++
        }
      })
    }
  })
  return numberOfMissingRequestSchemasInMediaTypeObjects
}
