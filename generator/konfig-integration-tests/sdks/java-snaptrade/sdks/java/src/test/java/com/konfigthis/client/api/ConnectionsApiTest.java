/*
 * SnapTrade
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 *
 * NOTE: This class is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


package com.konfigthis.client.api;

import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.model.BrokerageAuthorization;
import com.konfigthis.client.model.SessionEvent;
import java.util.UUID;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ConnectionsApi
 */
@Disabled
public class ConnectionsApiTest {

    private static ConnectionsApi api;

    
    @BeforeAll
    public static void beforeClass() {
        ApiClient apiClient = Configuration.getDefaultApiClient();
        api = new ConnectionsApi(apiClient);
    }

    /**
     * Get brokerage authorization details
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void detailBrokerageAuthorizationTest() throws ApiException {
        UUID authorizationId = null;
        String userId = null;
        String userSecret = null;
        BrokerageAuthorization response = api.detailBrokerageAuthorization(authorizationId, userId, userSecret)
                .execute();
        // TODO: test validations
    }

    /**
     * List all brokerage authorizations for the user
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listBrokerageAuthorizationsTest() throws ApiException {
        String userId = null;
        String userSecret = null;
        List<BrokerageAuthorization> response = api.listBrokerageAuthorizations(userId, userSecret)
                .execute();
        // TODO: test validations
    }

    /**
     * Delete brokerage authorization
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void removeBrokerageAuthorizationTest() throws ApiException {
        UUID authorizationId = null;
        String userId = null;
        String userSecret = null;
        api.removeBrokerageAuthorization(authorizationId, userId, userSecret)
                .execute();
        // TODO: test validations
    }

    /**
     * List all session events for the partner
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void sessionEventsTest() throws ApiException {
        String partnerClientId = null;
        String userId = null;
        String sessionId = null;
        List<SessionEvent> response = api.sessionEvents(partnerClientId)
                .userId(userId)
                .sessionId(sessionId)
                .execute();
        // TODO: test validations
    }

}