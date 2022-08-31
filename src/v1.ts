/* eslint-disable  @typescript-eslint/no-explicit-any */
"use strict";

import { ChannelCredentials } from "@grpc/grpc-js";
import { PermissionsServiceClient } from "./authzedapi/authzed/api/v1/permission_service.grpc-client";
import { SchemaServiceClient } from "./authzedapi/authzed/api/v1/schema.grpc-client";
import { WatchServiceClient } from "./authzedapi/authzed/api/v1/watch_service.grpc-client";

import * as util from "./util";
import { ClientSecurity } from "./util";

export function NewClient(
  token: string,
  endpoint = util.authzedEndpoint,
  security: ClientSecurity = ClientSecurity.SECURE
) {
  const creds = util.createClientCreds(endpoint, token, security);
  return NewClientWithChannelCredentials(endpoint, creds);
}

export function NewClientWithCustomCert(
  token: string,
  endpoint = util.authzedEndpoint,
  certificate: Buffer
) {
  const creds = util.createClientCredsWithCustomCert(token, certificate);
  return NewClientWithChannelCredentials(endpoint, creds);
}

export function NewClientWithChannelCredentials(
  endpoint = util.authzedEndpoint,
  creds: ChannelCredentials
) {
  const acl = new PermissionsServiceClient(endpoint, creds);
  const ns = new SchemaServiceClient(endpoint, creds);
  const watch = new WatchServiceClient(endpoint, creds);

  const handler = {
    get(target: object, name: string | symbol) {
      if ((acl as any)[name as string]) {
        return (acl as any)[name as string];
      }

      if ((ns as any)[name as string]) {
        return (ns as any)[name as string];
      }

      if ((watch as any)[name as string]) {
        return (watch as any)[name as string];
      }

      return undefined;
    },
  };

  return new Proxy<
    Omit<PermissionsServiceClient, "_binaryOptions"> &
    Omit<SchemaServiceClient, "_binaryOptions"> &
    Omit<WatchServiceClient, "_binaryOptions">
  >(acl as any, handler);
}

export * from "./authzedapi/authzed/api/v1/core";
export * from "./authzedapi/authzed/api/v1/permission_service";
export * from "./authzedapi/authzed/api/v1/schema";
export * from "./authzedapi/authzed/api/v1/watch_service";
export * from "./authzedapi/authzed/api/v1/watch_service.grpc-client";
export * from "./authzedapi/authzed/api/v1/permission_service.grpc-client";
export * from "./authzedapi/authzed/api/v1/schema.grpc-client";

export default {
  NewClient: NewClient,
};
