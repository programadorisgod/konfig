//
// UserRequestContent.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UserRequestContent: Codable, JSONEncodable, Hashable {

    public var customerId: String

    public init(customerId: String) {
        self.customerId = customerId
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case customerId = "customer_id"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(customerId, forKey: .customerId)
    }
}
