/*
 * Carbon
 * Connect external data to LLMs, no matter the source.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


package com.konfigthis.carbonai.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.konfigthis.carbonai.client.model.DataSourceLastSyncActions;
import com.konfigthis.carbonai.client.model.DataSourceSyncStatuses;
import com.konfigthis.carbonai.client.model.DataSourceType;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.time.OffsetDateTime;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import org.apache.commons.lang3.StringUtils;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.konfigthis.carbonai.client.JSON;

/**
 * OrganizationUserDataSourceAPI
 */@javax.annotation.Generated(value = "Generated by https://konfigthis.com")
public class OrganizationUserDataSourceAPI {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private Integer id;

  public static final String SERIALIZED_NAME_DATA_SOURCE_EXTERNAL_ID = "data_source_external_id";
  @SerializedName(SERIALIZED_NAME_DATA_SOURCE_EXTERNAL_ID)
  private String dataSourceExternalId;

  public static final String SERIALIZED_NAME_DATA_SOURCE_TYPE = "data_source_type";
  @SerializedName(SERIALIZED_NAME_DATA_SOURCE_TYPE)
  private DataSourceType dataSourceType;

  public static final String SERIALIZED_NAME_TOKEN = "token";
  @SerializedName(SERIALIZED_NAME_TOKEN)
  private Object token;

  public static final String SERIALIZED_NAME_SYNC_STATUS = "sync_status";
  @SerializedName(SERIALIZED_NAME_SYNC_STATUS)
  private DataSourceSyncStatuses syncStatus;

  public static final String SERIALIZED_NAME_SOURCE_ITEMS_SYNCED_AT = "source_items_synced_at";
  @SerializedName(SERIALIZED_NAME_SOURCE_ITEMS_SYNCED_AT)
  private OffsetDateTime sourceItemsSyncedAt;

  public static final String SERIALIZED_NAME_ORGANIZATION_USER_ID = "organization_user_id";
  @SerializedName(SERIALIZED_NAME_ORGANIZATION_USER_ID)
  private Integer organizationUserId;

  public static final String SERIALIZED_NAME_ORGANIZATION_ID = "organization_id";
  @SerializedName(SERIALIZED_NAME_ORGANIZATION_ID)
  private Integer organizationId;

  public static final String SERIALIZED_NAME_ORGANIZATION_SUPPLIED_USER_ID = "organization_supplied_user_id";
  @SerializedName(SERIALIZED_NAME_ORGANIZATION_SUPPLIED_USER_ID)
  private String organizationSuppliedUserId;

  public static final String SERIALIZED_NAME_REVOKED_ACCESS = "revoked_access";
  @SerializedName(SERIALIZED_NAME_REVOKED_ACCESS)
  private Boolean revokedAccess;

  public static final String SERIALIZED_NAME_LAST_SYNCED_AT = "last_synced_at";
  @SerializedName(SERIALIZED_NAME_LAST_SYNCED_AT)
  private OffsetDateTime lastSyncedAt;

  public static final String SERIALIZED_NAME_LAST_SYNC_ACTION = "last_sync_action";
  @SerializedName(SERIALIZED_NAME_LAST_SYNC_ACTION)
  private DataSourceLastSyncActions lastSyncAction;

  public static final String SERIALIZED_NAME_ENABLE_AUTO_SYNC = "enable_auto_sync";
  @SerializedName(SERIALIZED_NAME_ENABLE_AUTO_SYNC)
  private Boolean enableAutoSync;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public static final String SERIALIZED_NAME_FILES_SYNCED_AT = "files_synced_at";
  @SerializedName(SERIALIZED_NAME_FILES_SYNCED_AT)
  private OffsetDateTime filesSyncedAt;

  public static final String SERIALIZED_NAME_DATA_SOURCE_METADATA = "data_source_metadata";
  @SerializedName(SERIALIZED_NAME_DATA_SOURCE_METADATA)
  private Object dataSourceMetadata;

  public OrganizationUserDataSourceAPI() {
  }

  public OrganizationUserDataSourceAPI id(Integer id) {
    
    
    
    
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Integer getId() {
    return id;
  }


  public void setId(Integer id) {
    
    
    
    this.id = id;
  }


  public OrganizationUserDataSourceAPI dataSourceExternalId(String dataSourceExternalId) {
    
    
    
    
    this.dataSourceExternalId = dataSourceExternalId;
    return this;
  }

   /**
   * Get dataSourceExternalId
   * @return dataSourceExternalId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public String getDataSourceExternalId() {
    return dataSourceExternalId;
  }


  public void setDataSourceExternalId(String dataSourceExternalId) {
    
    
    
    this.dataSourceExternalId = dataSourceExternalId;
  }


  public OrganizationUserDataSourceAPI dataSourceType(DataSourceType dataSourceType) {
    
    
    
    
    this.dataSourceType = dataSourceType;
    return this;
  }

   /**
   * Get dataSourceType
   * @return dataSourceType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public DataSourceType getDataSourceType() {
    return dataSourceType;
  }


  public void setDataSourceType(DataSourceType dataSourceType) {
    
    
    
    this.dataSourceType = dataSourceType;
  }


  public OrganizationUserDataSourceAPI token(Object token) {
    
    
    
    
    this.token = token;
    return this;
  }

   /**
   * Get token
   * @return token
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public Object getToken() {
    return token;
  }


  public void setToken(Object token) {
    
    
    
    this.token = token;
  }


  public OrganizationUserDataSourceAPI syncStatus(DataSourceSyncStatuses syncStatus) {
    
    
    
    
    this.syncStatus = syncStatus;
    return this;
  }

   /**
   * Get syncStatus
   * @return syncStatus
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public DataSourceSyncStatuses getSyncStatus() {
    return syncStatus;
  }


  public void setSyncStatus(DataSourceSyncStatuses syncStatus) {
    
    
    
    this.syncStatus = syncStatus;
  }


  public OrganizationUserDataSourceAPI sourceItemsSyncedAt(OffsetDateTime sourceItemsSyncedAt) {
    
    
    
    
    this.sourceItemsSyncedAt = sourceItemsSyncedAt;
    return this;
  }

   /**
   * Get sourceItemsSyncedAt
   * @return sourceItemsSyncedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getSourceItemsSyncedAt() {
    return sourceItemsSyncedAt;
  }


  public void setSourceItemsSyncedAt(OffsetDateTime sourceItemsSyncedAt) {
    
    
    
    this.sourceItemsSyncedAt = sourceItemsSyncedAt;
  }


  public OrganizationUserDataSourceAPI organizationUserId(Integer organizationUserId) {
    
    
    
    
    this.organizationUserId = organizationUserId;
    return this;
  }

   /**
   * Get organizationUserId
   * @return organizationUserId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Integer getOrganizationUserId() {
    return organizationUserId;
  }


  public void setOrganizationUserId(Integer organizationUserId) {
    
    
    
    this.organizationUserId = organizationUserId;
  }


  public OrganizationUserDataSourceAPI organizationId(Integer organizationId) {
    
    
    
    
    this.organizationId = organizationId;
    return this;
  }

   /**
   * Get organizationId
   * @return organizationId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Integer getOrganizationId() {
    return organizationId;
  }


  public void setOrganizationId(Integer organizationId) {
    
    
    
    this.organizationId = organizationId;
  }


  public OrganizationUserDataSourceAPI organizationSuppliedUserId(String organizationSuppliedUserId) {
    
    
    
    
    this.organizationSuppliedUserId = organizationSuppliedUserId;
    return this;
  }

   /**
   * Get organizationSuppliedUserId
   * @return organizationSuppliedUserId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getOrganizationSuppliedUserId() {
    return organizationSuppliedUserId;
  }


  public void setOrganizationSuppliedUserId(String organizationSuppliedUserId) {
    
    
    
    this.organizationSuppliedUserId = organizationSuppliedUserId;
  }


  public OrganizationUserDataSourceAPI revokedAccess(Boolean revokedAccess) {
    
    
    
    
    this.revokedAccess = revokedAccess;
    return this;
  }

   /**
   * Get revokedAccess
   * @return revokedAccess
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Boolean getRevokedAccess() {
    return revokedAccess;
  }


  public void setRevokedAccess(Boolean revokedAccess) {
    
    
    
    this.revokedAccess = revokedAccess;
  }


  public OrganizationUserDataSourceAPI lastSyncedAt(OffsetDateTime lastSyncedAt) {
    
    
    
    
    this.lastSyncedAt = lastSyncedAt;
    return this;
  }

   /**
   * Get lastSyncedAt
   * @return lastSyncedAt
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getLastSyncedAt() {
    return lastSyncedAt;
  }


  public void setLastSyncedAt(OffsetDateTime lastSyncedAt) {
    
    
    
    this.lastSyncedAt = lastSyncedAt;
  }


  public OrganizationUserDataSourceAPI lastSyncAction(DataSourceLastSyncActions lastSyncAction) {
    
    
    
    
    this.lastSyncAction = lastSyncAction;
    return this;
  }

   /**
   * Get lastSyncAction
   * @return lastSyncAction
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public DataSourceLastSyncActions getLastSyncAction() {
    return lastSyncAction;
  }


  public void setLastSyncAction(DataSourceLastSyncActions lastSyncAction) {
    
    
    
    this.lastSyncAction = lastSyncAction;
  }


  public OrganizationUserDataSourceAPI enableAutoSync(Boolean enableAutoSync) {
    
    
    
    
    this.enableAutoSync = enableAutoSync;
    return this;
  }

   /**
   * Get enableAutoSync
   * @return enableAutoSync
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public Boolean getEnableAutoSync() {
    return enableAutoSync;
  }


  public void setEnableAutoSync(Boolean enableAutoSync) {
    
    
    
    this.enableAutoSync = enableAutoSync;
  }


  public OrganizationUserDataSourceAPI createdAt(OffsetDateTime createdAt) {
    
    
    
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Get createdAt
   * @return createdAt
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    
    
    
    this.createdAt = createdAt;
  }


  public OrganizationUserDataSourceAPI updatedAt(OffsetDateTime updatedAt) {
    
    
    
    
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Get updatedAt
   * @return updatedAt
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(OffsetDateTime updatedAt) {
    
    
    
    this.updatedAt = updatedAt;
  }


  public OrganizationUserDataSourceAPI filesSyncedAt(OffsetDateTime filesSyncedAt) {
    
    
    
    
    this.filesSyncedAt = filesSyncedAt;
    return this;
  }

   /**
   * Get filesSyncedAt
   * @return filesSyncedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getFilesSyncedAt() {
    return filesSyncedAt;
  }


  public void setFilesSyncedAt(OffsetDateTime filesSyncedAt) {
    
    
    
    this.filesSyncedAt = filesSyncedAt;
  }


  public OrganizationUserDataSourceAPI dataSourceMetadata(Object dataSourceMetadata) {
    
    
    
    
    this.dataSourceMetadata = dataSourceMetadata;
    return this;
  }

   /**
   * Get dataSourceMetadata
   * @return dataSourceMetadata
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Object getDataSourceMetadata() {
    return dataSourceMetadata;
  }


  public void setDataSourceMetadata(Object dataSourceMetadata) {
    
    
    
    this.dataSourceMetadata = dataSourceMetadata;
  }

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  private Map<String, Object> additionalProperties;

  /**
   * Set the additional (undeclared) property with the specified name and value.
   * If the property does not already exist, create it otherwise replace it.
   *
   * @param key name of the property
   * @param value value of the property
   * @return the OrganizationUserDataSourceAPI instance itself
   */
  public OrganizationUserDataSourceAPI putAdditionalProperty(String key, Object value) {
    if (this.additionalProperties == null) {
        this.additionalProperties = new HashMap<String, Object>();
    }
    this.additionalProperties.put(key, value);
    return this;
  }

  /**
   * Return the additional (undeclared) property.
   *
   * @return a map of objects
   */
  public Map<String, Object> getAdditionalProperties() {
    return additionalProperties;
  }

  /**
   * Return the additional (undeclared) property with the specified name.
   *
   * @param key name of the property
   * @return an object
   */
  public Object getAdditionalProperty(String key) {
    if (this.additionalProperties == null) {
        return null;
    }
    return this.additionalProperties.get(key);
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrganizationUserDataSourceAPI organizationUserDataSourceAPI = (OrganizationUserDataSourceAPI) o;
    return Objects.equals(this.id, organizationUserDataSourceAPI.id) &&
        Objects.equals(this.dataSourceExternalId, organizationUserDataSourceAPI.dataSourceExternalId) &&
        Objects.equals(this.dataSourceType, organizationUserDataSourceAPI.dataSourceType) &&
        Objects.equals(this.token, organizationUserDataSourceAPI.token) &&
        Objects.equals(this.syncStatus, organizationUserDataSourceAPI.syncStatus) &&
        Objects.equals(this.sourceItemsSyncedAt, organizationUserDataSourceAPI.sourceItemsSyncedAt) &&
        Objects.equals(this.organizationUserId, organizationUserDataSourceAPI.organizationUserId) &&
        Objects.equals(this.organizationId, organizationUserDataSourceAPI.organizationId) &&
        Objects.equals(this.organizationSuppliedUserId, organizationUserDataSourceAPI.organizationSuppliedUserId) &&
        Objects.equals(this.revokedAccess, organizationUserDataSourceAPI.revokedAccess) &&
        Objects.equals(this.lastSyncedAt, organizationUserDataSourceAPI.lastSyncedAt) &&
        Objects.equals(this.lastSyncAction, organizationUserDataSourceAPI.lastSyncAction) &&
        Objects.equals(this.enableAutoSync, organizationUserDataSourceAPI.enableAutoSync) &&
        Objects.equals(this.createdAt, organizationUserDataSourceAPI.createdAt) &&
        Objects.equals(this.updatedAt, organizationUserDataSourceAPI.updatedAt) &&
        Objects.equals(this.filesSyncedAt, organizationUserDataSourceAPI.filesSyncedAt) &&
        Objects.equals(this.dataSourceMetadata, organizationUserDataSourceAPI.dataSourceMetadata)&&
        Objects.equals(this.additionalProperties, organizationUserDataSourceAPI.additionalProperties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, dataSourceExternalId, dataSourceType, token, syncStatus, sourceItemsSyncedAt, organizationUserId, organizationId, organizationSuppliedUserId, revokedAccess, lastSyncedAt, lastSyncAction, enableAutoSync, createdAt, updatedAt, filesSyncedAt, dataSourceMetadata, additionalProperties);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrganizationUserDataSourceAPI {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    dataSourceExternalId: ").append(toIndentedString(dataSourceExternalId)).append("\n");
    sb.append("    dataSourceType: ").append(toIndentedString(dataSourceType)).append("\n");
    sb.append("    token: ").append(toIndentedString(token)).append("\n");
    sb.append("    syncStatus: ").append(toIndentedString(syncStatus)).append("\n");
    sb.append("    sourceItemsSyncedAt: ").append(toIndentedString(sourceItemsSyncedAt)).append("\n");
    sb.append("    organizationUserId: ").append(toIndentedString(organizationUserId)).append("\n");
    sb.append("    organizationId: ").append(toIndentedString(organizationId)).append("\n");
    sb.append("    organizationSuppliedUserId: ").append(toIndentedString(organizationSuppliedUserId)).append("\n");
    sb.append("    revokedAccess: ").append(toIndentedString(revokedAccess)).append("\n");
    sb.append("    lastSyncedAt: ").append(toIndentedString(lastSyncedAt)).append("\n");
    sb.append("    lastSyncAction: ").append(toIndentedString(lastSyncAction)).append("\n");
    sb.append("    enableAutoSync: ").append(toIndentedString(enableAutoSync)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    filesSyncedAt: ").append(toIndentedString(filesSyncedAt)).append("\n");
    sb.append("    dataSourceMetadata: ").append(toIndentedString(dataSourceMetadata)).append("\n");
    sb.append("    additionalProperties: ").append(toIndentedString(additionalProperties)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("id");
    openapiFields.add("data_source_external_id");
    openapiFields.add("data_source_type");
    openapiFields.add("token");
    openapiFields.add("sync_status");
    openapiFields.add("source_items_synced_at");
    openapiFields.add("organization_user_id");
    openapiFields.add("organization_id");
    openapiFields.add("organization_supplied_user_id");
    openapiFields.add("revoked_access");
    openapiFields.add("last_synced_at");
    openapiFields.add("last_sync_action");
    openapiFields.add("enable_auto_sync");
    openapiFields.add("created_at");
    openapiFields.add("updated_at");
    openapiFields.add("files_synced_at");
    openapiFields.add("data_source_metadata");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("id");
    openapiRequiredFields.add("data_source_external_id");
    openapiRequiredFields.add("data_source_type");
    openapiRequiredFields.add("token");
    openapiRequiredFields.add("sync_status");
    openapiRequiredFields.add("source_items_synced_at");
    openapiRequiredFields.add("organization_user_id");
    openapiRequiredFields.add("organization_id");
    openapiRequiredFields.add("organization_supplied_user_id");
    openapiRequiredFields.add("revoked_access");
    openapiRequiredFields.add("last_synced_at");
    openapiRequiredFields.add("last_sync_action");
    openapiRequiredFields.add("enable_auto_sync");
    openapiRequiredFields.add("created_at");
    openapiRequiredFields.add("updated_at");
    openapiRequiredFields.add("files_synced_at");
    openapiRequiredFields.add("data_source_metadata");
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to OrganizationUserDataSourceAPI
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!OrganizationUserDataSourceAPI.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in OrganizationUserDataSourceAPI is not found in the empty JSON string", OrganizationUserDataSourceAPI.openapiRequiredFields.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : OrganizationUserDataSourceAPI.openapiRequiredFields) {
        if (jsonObj.get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonObj.toString()));
        }
      }
      if (!jsonObj.get("data_source_external_id").isJsonNull() && !jsonObj.get("data_source_external_id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `data_source_external_id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("data_source_external_id").toString()));
      }
      if (!jsonObj.get("organization_supplied_user_id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `organization_supplied_user_id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("organization_supplied_user_id").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!OrganizationUserDataSourceAPI.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'OrganizationUserDataSourceAPI' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<OrganizationUserDataSourceAPI> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(OrganizationUserDataSourceAPI.class));

       return (TypeAdapter<T>) new TypeAdapter<OrganizationUserDataSourceAPI>() {
           @Override
           public void write(JsonWriter out, OrganizationUserDataSourceAPI value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             obj.remove("additionalProperties");
             // serialize additonal properties
             if (value.getAdditionalProperties() != null) {
               for (Map.Entry<String, Object> entry : value.getAdditionalProperties().entrySet()) {
                 if (entry.getValue() instanceof String)
                   obj.addProperty(entry.getKey(), (String) entry.getValue());
                 else if (entry.getValue() instanceof Number)
                   obj.addProperty(entry.getKey(), (Number) entry.getValue());
                 else if (entry.getValue() instanceof Boolean)
                   obj.addProperty(entry.getKey(), (Boolean) entry.getValue());
                 else if (entry.getValue() instanceof Character)
                   obj.addProperty(entry.getKey(), (Character) entry.getValue());
                 else {
                   obj.add(entry.getKey(), gson.toJsonTree(entry.getValue()).getAsJsonObject());
                 }
               }
             }
             elementAdapter.write(out, obj);
           }

           @Override
           public OrganizationUserDataSourceAPI read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             // store additional fields in the deserialized instance
             OrganizationUserDataSourceAPI instance = thisAdapter.fromJsonTree(jsonObj);
             for (Map.Entry<String, JsonElement> entry : jsonObj.entrySet()) {
               if (!openapiFields.contains(entry.getKey())) {
                 if (entry.getValue().isJsonPrimitive()) { // primitive type
                   if (entry.getValue().getAsJsonPrimitive().isString())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsString());
                   else if (entry.getValue().getAsJsonPrimitive().isNumber())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsNumber());
                   else if (entry.getValue().getAsJsonPrimitive().isBoolean())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsBoolean());
                   else
                     throw new IllegalArgumentException(String.format("The field `%s` has unknown primitive type. Value: %s", entry.getKey(), entry.getValue().toString()));
                 } else if (entry.getValue().isJsonArray()) {
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), List.class));
                 } else { // JSON object
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), HashMap.class));
                 }
               }
             }
             return instance;
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of OrganizationUserDataSourceAPI given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of OrganizationUserDataSourceAPI
  * @throws IOException if the JSON string is invalid with respect to OrganizationUserDataSourceAPI
  */
  public static OrganizationUserDataSourceAPI fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, OrganizationUserDataSourceAPI.class);
  }

 /**
  * Convert an instance of OrganizationUserDataSourceAPI to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}
