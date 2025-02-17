// @generated by protobuf-ts 2.8.3 with parameter generate_dependencies,long_type_string,client_grpc1
// @generated from protobuf file "authzed/api/v1/experimental_service.proto" (package "authzed.api.v1", syntax proto3)
// tslint:disable
import { ExperimentalService } from "./experimental_service";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { BulkCheckPermissionResponse } from "./experimental_service";
import type { BulkCheckPermissionRequest } from "./experimental_service";
import type { StreamingBulkCheckPermissionResponse } from "./experimental_service";
import type { StreamingBulkCheckPermissionRequest } from "./experimental_service";
import type { BulkExportRelationshipsResponse } from "./experimental_service";
import type { BulkExportRelationshipsRequest } from "./experimental_service";
import type { BulkImportRelationshipsRequest } from "./experimental_service";
import type { BulkImportRelationshipsResponse } from "./experimental_service";
import * as grpc from "@grpc/grpc-js";
/**
 * ExperimentalService exposes a number of APIs that are currently being
 * prototyped and tested for future inclusion in the stable API.
 *
 * @generated from protobuf service authzed.api.v1.ExperimentalService
 */
export interface IExperimentalServiceClient {
    /**
     * BulkImportRelationships is a faster path to writing a large number of
     * relationships at once. It is both batched and streaming. For maximum
     * performance, the caller should attempt to write relationships in as close
     * to relationship sort order as possible: (resource.object_type,
     * resource.object_id, relation, subject.object.object_type,
     * subject.object.object_id, subject.optional_relation)
     *
     * EXPERIMENTAL
     * https://github.com/authzed/spicedb/issues/1303
     *
     * @generated from protobuf rpc: BulkImportRelationships(stream authzed.api.v1.BulkImportRelationshipsRequest) returns (authzed.api.v1.BulkImportRelationshipsResponse);
     */
    bulkImportRelationships(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: BulkImportRelationshipsResponse) => void): grpc.ClientWritableStream<BulkImportRelationshipsRequest>;
    bulkImportRelationships(metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: BulkImportRelationshipsResponse) => void): grpc.ClientWritableStream<BulkImportRelationshipsRequest>;
    bulkImportRelationships(options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: BulkImportRelationshipsResponse) => void): grpc.ClientWritableStream<BulkImportRelationshipsRequest>;
    bulkImportRelationships(callback: (err: grpc.ServiceError | null, value?: BulkImportRelationshipsResponse) => void): grpc.ClientWritableStream<BulkImportRelationshipsRequest>;
    /**
     * BulkExportRelationships is the fastest path available to exporting
     * relationships from the server. It is resumable, and will return results
     * in an order determined by the server.
     *
     * @generated from protobuf rpc: BulkExportRelationships(authzed.api.v1.BulkExportRelationshipsRequest) returns (stream authzed.api.v1.BulkExportRelationshipsResponse);
     */
    bulkExportRelationships(input: BulkExportRelationshipsRequest, metadata?: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<BulkExportRelationshipsResponse>;
    bulkExportRelationships(input: BulkExportRelationshipsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<BulkExportRelationshipsResponse>;
    /**
     * @generated from protobuf rpc: StreamingBulkCheckPermission(authzed.api.v1.StreamingBulkCheckPermissionRequest) returns (stream authzed.api.v1.StreamingBulkCheckPermissionResponse);
     */
    streamingBulkCheckPermission(input: StreamingBulkCheckPermissionRequest, metadata?: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<StreamingBulkCheckPermissionResponse>;
    streamingBulkCheckPermission(input: StreamingBulkCheckPermissionRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<StreamingBulkCheckPermissionResponse>;
    /**
     * @generated from protobuf rpc: BulkCheckPermission(authzed.api.v1.BulkCheckPermissionRequest) returns (authzed.api.v1.BulkCheckPermissionResponse);
     */
    bulkCheckPermission(input: BulkCheckPermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: BulkCheckPermissionResponse) => void): grpc.ClientUnaryCall;
    bulkCheckPermission(input: BulkCheckPermissionRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: BulkCheckPermissionResponse) => void): grpc.ClientUnaryCall;
    bulkCheckPermission(input: BulkCheckPermissionRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: BulkCheckPermissionResponse) => void): grpc.ClientUnaryCall;
    bulkCheckPermission(input: BulkCheckPermissionRequest, callback: (err: grpc.ServiceError | null, value?: BulkCheckPermissionResponse) => void): grpc.ClientUnaryCall;
}
/**
 * ExperimentalService exposes a number of APIs that are currently being
 * prototyped and tested for future inclusion in the stable API.
 *
 * @generated from protobuf service authzed.api.v1.ExperimentalService
 */
export class ExperimentalServiceClient extends grpc.Client implements IExperimentalServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * BulkImportRelationships is a faster path to writing a large number of
     * relationships at once. It is both batched and streaming. For maximum
     * performance, the caller should attempt to write relationships in as close
     * to relationship sort order as possible: (resource.object_type,
     * resource.object_id, relation, subject.object.object_type,
     * subject.object.object_id, subject.optional_relation)
     *
     * EXPERIMENTAL
     * https://github.com/authzed/spicedb/issues/1303
     *
     * @generated from protobuf rpc: BulkImportRelationships(stream authzed.api.v1.BulkImportRelationshipsRequest) returns (authzed.api.v1.BulkImportRelationshipsResponse);
     */
    bulkImportRelationships(metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: BulkImportRelationshipsResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: BulkImportRelationshipsResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: BulkImportRelationshipsResponse) => void)): grpc.ClientWritableStream<BulkImportRelationshipsRequest> {
        const method = ExperimentalService.methods[0];
        return this.makeClientStreamRequest<BulkImportRelationshipsRequest, BulkImportRelationshipsResponse>(`/${ExperimentalService.typeName}/${method.name}`, (value: BulkImportRelationshipsRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): BulkImportRelationshipsResponse => method.O.fromBinary(value, this._binaryOptions), (metadata as any), (options as any), (callback as any));
    }
    /**
     * BulkExportRelationships is the fastest path available to exporting
     * relationships from the server. It is resumable, and will return results
     * in an order determined by the server.
     *
     * @generated from protobuf rpc: BulkExportRelationships(authzed.api.v1.BulkExportRelationshipsRequest) returns (stream authzed.api.v1.BulkExportRelationshipsResponse);
     */
    bulkExportRelationships(input: BulkExportRelationshipsRequest, metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientReadableStream<BulkExportRelationshipsResponse> {
        const method = ExperimentalService.methods[1];
        return this.makeServerStreamRequest<BulkExportRelationshipsRequest, BulkExportRelationshipsResponse>(`/${ExperimentalService.typeName}/${method.name}`, (value: BulkExportRelationshipsRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): BulkExportRelationshipsResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), options);
    }
    /**
     * @generated from protobuf rpc: StreamingBulkCheckPermission(authzed.api.v1.StreamingBulkCheckPermissionRequest) returns (stream authzed.api.v1.StreamingBulkCheckPermissionResponse);
     */
    streamingBulkCheckPermission(input: StreamingBulkCheckPermissionRequest, metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientReadableStream<StreamingBulkCheckPermissionResponse> {
        const method = ExperimentalService.methods[2];
        return this.makeServerStreamRequest<StreamingBulkCheckPermissionRequest, StreamingBulkCheckPermissionResponse>(`/${ExperimentalService.typeName}/${method.name}`, (value: StreamingBulkCheckPermissionRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): StreamingBulkCheckPermissionResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), options);
    }
    /**
     * @generated from protobuf rpc: BulkCheckPermission(authzed.api.v1.BulkCheckPermissionRequest) returns (authzed.api.v1.BulkCheckPermissionResponse);
     */
    bulkCheckPermission(input: BulkCheckPermissionRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: BulkCheckPermissionResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: BulkCheckPermissionResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: BulkCheckPermissionResponse) => void)): grpc.ClientUnaryCall {
        const method = ExperimentalService.methods[3];
        return this.makeUnaryRequest<BulkCheckPermissionRequest, BulkCheckPermissionResponse>(`/${ExperimentalService.typeName}/${method.name}`, (value: BulkCheckPermissionRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): BulkCheckPermissionResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
}
