import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ContractAddress: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u8: { input: any; output: any; }
  u16: { input: any; output: any; }
};

export type Authorization = {
  __typename?: 'Authorization';
  creator_address?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<Entity>;
  land_id?: Maybe<Scalars['u8']['output']>;
  pixel_id?: Maybe<Scalars['u16']['output']>;
};

export type AuthorizationConnection = {
  __typename?: 'AuthorizationConnection';
  edges?: Maybe<Array<Maybe<AuthorizationEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type AuthorizationEdge = {
  __typename?: 'AuthorizationEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Authorization>;
};

export type AuthorizationOrder = {
  direction: OrderDirection;
  field: AuthorizationOrderField;
};

export enum AuthorizationOrderField {
  CreatorAddress = 'CREATOR_ADDRESS',
  LandId = 'LAND_ID',
  PixelId = 'PIXEL_ID'
}

export type AuthorizationWhereInput = {
  creator_address?: InputMaybe<Scalars['ContractAddress']['input']>;
  creator_addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  creator_addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  creator_addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  creator_addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  creator_addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  creator_addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  land_id?: InputMaybe<Scalars['u8']['input']>;
  land_idEQ?: InputMaybe<Scalars['u8']['input']>;
  land_idGT?: InputMaybe<Scalars['u8']['input']>;
  land_idGTE?: InputMaybe<Scalars['u8']['input']>;
  land_idLT?: InputMaybe<Scalars['u8']['input']>;
  land_idLTE?: InputMaybe<Scalars['u8']['input']>;
  land_idNEQ?: InputMaybe<Scalars['u8']['input']>;
  pixel_id?: InputMaybe<Scalars['u16']['input']>;
  pixel_idEQ?: InputMaybe<Scalars['u16']['input']>;
  pixel_idGT?: InputMaybe<Scalars['u16']['input']>;
  pixel_idGTE?: InputMaybe<Scalars['u16']['input']>;
  pixel_idLT?: InputMaybe<Scalars['u16']['input']>;
  pixel_idLTE?: InputMaybe<Scalars['u16']['input']>;
  pixel_idNEQ?: InputMaybe<Scalars['u16']['input']>;
};

export type Color = {
  __typename?: 'Color';
  a?: Maybe<Scalars['u8']['output']>;
  b?: Maybe<Scalars['u8']['output']>;
  entity?: Maybe<Entity>;
  g?: Maybe<Scalars['u8']['output']>;
  land_id?: Maybe<Scalars['u8']['output']>;
  pixel_id?: Maybe<Scalars['u16']['output']>;
  r?: Maybe<Scalars['u8']['output']>;
};

export type ColorConnection = {
  __typename?: 'ColorConnection';
  edges?: Maybe<Array<Maybe<ColorEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ColorEdge = {
  __typename?: 'ColorEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Color>;
};

export type ColorOrder = {
  direction: OrderDirection;
  field: ColorOrderField;
};

export enum ColorOrderField {
  A = 'A',
  B = 'B',
  G = 'G',
  LandId = 'LAND_ID',
  PixelId = 'PIXEL_ID',
  R = 'R'
}

export type ColorWhereInput = {
  a?: InputMaybe<Scalars['u8']['input']>;
  aEQ?: InputMaybe<Scalars['u8']['input']>;
  aGT?: InputMaybe<Scalars['u8']['input']>;
  aGTE?: InputMaybe<Scalars['u8']['input']>;
  aLT?: InputMaybe<Scalars['u8']['input']>;
  aLTE?: InputMaybe<Scalars['u8']['input']>;
  aNEQ?: InputMaybe<Scalars['u8']['input']>;
  b?: InputMaybe<Scalars['u8']['input']>;
  bEQ?: InputMaybe<Scalars['u8']['input']>;
  bGT?: InputMaybe<Scalars['u8']['input']>;
  bGTE?: InputMaybe<Scalars['u8']['input']>;
  bLT?: InputMaybe<Scalars['u8']['input']>;
  bLTE?: InputMaybe<Scalars['u8']['input']>;
  bNEQ?: InputMaybe<Scalars['u8']['input']>;
  g?: InputMaybe<Scalars['u8']['input']>;
  gEQ?: InputMaybe<Scalars['u8']['input']>;
  gGT?: InputMaybe<Scalars['u8']['input']>;
  gGTE?: InputMaybe<Scalars['u8']['input']>;
  gLT?: InputMaybe<Scalars['u8']['input']>;
  gLTE?: InputMaybe<Scalars['u8']['input']>;
  gNEQ?: InputMaybe<Scalars['u8']['input']>;
  land_id?: InputMaybe<Scalars['u8']['input']>;
  land_idEQ?: InputMaybe<Scalars['u8']['input']>;
  land_idGT?: InputMaybe<Scalars['u8']['input']>;
  land_idGTE?: InputMaybe<Scalars['u8']['input']>;
  land_idLT?: InputMaybe<Scalars['u8']['input']>;
  land_idLTE?: InputMaybe<Scalars['u8']['input']>;
  land_idNEQ?: InputMaybe<Scalars['u8']['input']>;
  pixel_id?: InputMaybe<Scalars['u16']['input']>;
  pixel_idEQ?: InputMaybe<Scalars['u16']['input']>;
  pixel_idGT?: InputMaybe<Scalars['u16']['input']>;
  pixel_idGTE?: InputMaybe<Scalars['u16']['input']>;
  pixel_idLT?: InputMaybe<Scalars['u16']['input']>;
  pixel_idLTE?: InputMaybe<Scalars['u16']['input']>;
  pixel_idNEQ?: InputMaybe<Scalars['u16']['input']>;
  r?: InputMaybe<Scalars['u8']['input']>;
  rEQ?: InputMaybe<Scalars['u8']['input']>;
  rGT?: InputMaybe<Scalars['u8']['input']>;
  rGTE?: InputMaybe<Scalars['u8']['input']>;
  rLT?: InputMaybe<Scalars['u8']['input']>;
  rLTE?: InputMaybe<Scalars['u8']['input']>;
  rNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type Condition = {
  __typename?: 'Condition';
  entity?: Maybe<Entity>;
  land_id?: Maybe<Scalars['u8']['output']>;
  pixel_address?: Maybe<Scalars['ContractAddress']['output']>;
  pixel_id?: Maybe<Scalars['u16']['output']>;
  pixel_nature?: Maybe<Scalars['u8']['output']>;
};

export type ConditionConnection = {
  __typename?: 'ConditionConnection';
  edges?: Maybe<Array<Maybe<ConditionEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ConditionEdge = {
  __typename?: 'ConditionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Condition>;
};

export type ConditionOrder = {
  direction: OrderDirection;
  field: ConditionOrderField;
};

export enum ConditionOrderField {
  LandId = 'LAND_ID',
  PixelAddress = 'PIXEL_ADDRESS',
  PixelId = 'PIXEL_ID',
  PixelNature = 'PIXEL_NATURE'
}

export type ConditionWhereInput = {
  land_id?: InputMaybe<Scalars['u8']['input']>;
  land_idEQ?: InputMaybe<Scalars['u8']['input']>;
  land_idGT?: InputMaybe<Scalars['u8']['input']>;
  land_idGTE?: InputMaybe<Scalars['u8']['input']>;
  land_idLT?: InputMaybe<Scalars['u8']['input']>;
  land_idLTE?: InputMaybe<Scalars['u8']['input']>;
  land_idNEQ?: InputMaybe<Scalars['u8']['input']>;
  pixel_address?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_id?: InputMaybe<Scalars['u16']['input']>;
  pixel_idEQ?: InputMaybe<Scalars['u16']['input']>;
  pixel_idGT?: InputMaybe<Scalars['u16']['input']>;
  pixel_idGTE?: InputMaybe<Scalars['u16']['input']>;
  pixel_idLT?: InputMaybe<Scalars['u16']['input']>;
  pixel_idLTE?: InputMaybe<Scalars['u16']['input']>;
  pixel_idNEQ?: InputMaybe<Scalars['u16']['input']>;
  pixel_nature?: InputMaybe<Scalars['u8']['input']>;
  pixel_natureEQ?: InputMaybe<Scalars['u8']['input']>;
  pixel_natureGT?: InputMaybe<Scalars['u8']['input']>;
  pixel_natureGTE?: InputMaybe<Scalars['u8']['input']>;
  pixel_natureLT?: InputMaybe<Scalars['u8']['input']>;
  pixel_natureLTE?: InputMaybe<Scalars['u8']['input']>;
  pixel_natureNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type Connection = {
  __typename?: 'Connection';
  entity?: Maybe<Entity>;
  land_id?: Maybe<Scalars['u8']['output']>;
  pixel_connected_land_id?: Maybe<Scalars['u8']['output']>;
  pixel_connected_pixel_id?: Maybe<Scalars['u16']['output']>;
  pixel_id?: Maybe<Scalars['u16']['output']>;
};

export type ConnectionConnection = {
  __typename?: 'ConnectionConnection';
  edges?: Maybe<Array<Maybe<ConnectionEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ConnectionEdge = {
  __typename?: 'ConnectionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Connection>;
};

export type ConnectionOrder = {
  direction: OrderDirection;
  field: ConnectionOrderField;
};

export enum ConnectionOrderField {
  LandId = 'LAND_ID',
  PixelConnectedLandId = 'PIXEL_CONNECTED_LAND_ID',
  PixelConnectedPixelId = 'PIXEL_CONNECTED_PIXEL_ID',
  PixelId = 'PIXEL_ID'
}

export type ConnectionWhereInput = {
  land_id?: InputMaybe<Scalars['u8']['input']>;
  land_idEQ?: InputMaybe<Scalars['u8']['input']>;
  land_idGT?: InputMaybe<Scalars['u8']['input']>;
  land_idGTE?: InputMaybe<Scalars['u8']['input']>;
  land_idLT?: InputMaybe<Scalars['u8']['input']>;
  land_idLTE?: InputMaybe<Scalars['u8']['input']>;
  land_idNEQ?: InputMaybe<Scalars['u8']['input']>;
  pixel_connected_land_id?: InputMaybe<Scalars['u8']['input']>;
  pixel_connected_land_idEQ?: InputMaybe<Scalars['u8']['input']>;
  pixel_connected_land_idGT?: InputMaybe<Scalars['u8']['input']>;
  pixel_connected_land_idGTE?: InputMaybe<Scalars['u8']['input']>;
  pixel_connected_land_idLT?: InputMaybe<Scalars['u8']['input']>;
  pixel_connected_land_idLTE?: InputMaybe<Scalars['u8']['input']>;
  pixel_connected_land_idNEQ?: InputMaybe<Scalars['u8']['input']>;
  pixel_connected_pixel_id?: InputMaybe<Scalars['u16']['input']>;
  pixel_connected_pixel_idEQ?: InputMaybe<Scalars['u16']['input']>;
  pixel_connected_pixel_idGT?: InputMaybe<Scalars['u16']['input']>;
  pixel_connected_pixel_idGTE?: InputMaybe<Scalars['u16']['input']>;
  pixel_connected_pixel_idLT?: InputMaybe<Scalars['u16']['input']>;
  pixel_connected_pixel_idLTE?: InputMaybe<Scalars['u16']['input']>;
  pixel_connected_pixel_idNEQ?: InputMaybe<Scalars['u16']['input']>;
  pixel_id?: InputMaybe<Scalars['u16']['input']>;
  pixel_idEQ?: InputMaybe<Scalars['u16']['input']>;
  pixel_idGT?: InputMaybe<Scalars['u16']['input']>;
  pixel_idGTE?: InputMaybe<Scalars['u16']['input']>;
  pixel_idLT?: InputMaybe<Scalars['u16']['input']>;
  pixel_idLTE?: InputMaybe<Scalars['u16']['input']>;
  pixel_idNEQ?: InputMaybe<Scalars['u16']['input']>;
};

export type Entity = {
  __typename?: 'Entity';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  event_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  model_names?: Maybe<Scalars['String']['output']>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type EntityConnection = {
  __typename?: 'EntityConnection';
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type EntityEdge = {
  __typename?: 'EntityEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Entity>;
};

export type Event = {
  __typename?: 'Event';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  systemCall: SystemCall;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Event>;
};

export type Land = {
  __typename?: 'Land';
  chain_id?: Maybe<Scalars['u8']['output']>;
  entity?: Maybe<Entity>;
  height?: Maybe<Scalars['u8']['output']>;
  land_id?: Maybe<Scalars['u8']['output']>;
  land_name?: Maybe<Scalars['felt252']['output']>;
  width?: Maybe<Scalars['u8']['output']>;
};

export type LandConnection = {
  __typename?: 'LandConnection';
  edges?: Maybe<Array<Maybe<LandEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type LandEdge = {
  __typename?: 'LandEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Land>;
};

export type LandOrder = {
  direction: OrderDirection;
  field: LandOrderField;
};

export enum LandOrderField {
  ChainId = 'CHAIN_ID',
  Height = 'HEIGHT',
  LandId = 'LAND_ID',
  LandName = 'LAND_NAME',
  Width = 'WIDTH'
}

export type LandWhereInput = {
  chain_id?: InputMaybe<Scalars['u8']['input']>;
  chain_idEQ?: InputMaybe<Scalars['u8']['input']>;
  chain_idGT?: InputMaybe<Scalars['u8']['input']>;
  chain_idGTE?: InputMaybe<Scalars['u8']['input']>;
  chain_idLT?: InputMaybe<Scalars['u8']['input']>;
  chain_idLTE?: InputMaybe<Scalars['u8']['input']>;
  chain_idNEQ?: InputMaybe<Scalars['u8']['input']>;
  height?: InputMaybe<Scalars['u8']['input']>;
  heightEQ?: InputMaybe<Scalars['u8']['input']>;
  heightGT?: InputMaybe<Scalars['u8']['input']>;
  heightGTE?: InputMaybe<Scalars['u8']['input']>;
  heightLT?: InputMaybe<Scalars['u8']['input']>;
  heightLTE?: InputMaybe<Scalars['u8']['input']>;
  heightNEQ?: InputMaybe<Scalars['u8']['input']>;
  land_id?: InputMaybe<Scalars['u8']['input']>;
  land_idEQ?: InputMaybe<Scalars['u8']['input']>;
  land_idGT?: InputMaybe<Scalars['u8']['input']>;
  land_idGTE?: InputMaybe<Scalars['u8']['input']>;
  land_idLT?: InputMaybe<Scalars['u8']['input']>;
  land_idLTE?: InputMaybe<Scalars['u8']['input']>;
  land_idNEQ?: InputMaybe<Scalars['u8']['input']>;
  land_name?: InputMaybe<Scalars['felt252']['input']>;
  land_nameEQ?: InputMaybe<Scalars['felt252']['input']>;
  land_nameGT?: InputMaybe<Scalars['felt252']['input']>;
  land_nameGTE?: InputMaybe<Scalars['felt252']['input']>;
  land_nameLT?: InputMaybe<Scalars['felt252']['input']>;
  land_nameLTE?: InputMaybe<Scalars['felt252']['input']>;
  land_nameNEQ?: InputMaybe<Scalars['felt252']['input']>;
  width?: InputMaybe<Scalars['u8']['input']>;
  widthEQ?: InputMaybe<Scalars['u8']['input']>;
  widthGT?: InputMaybe<Scalars['u8']['input']>;
  widthGTE?: InputMaybe<Scalars['u8']['input']>;
  widthLT?: InputMaybe<Scalars['u8']['input']>;
  widthLTE?: InputMaybe<Scalars['u8']['input']>;
  widthNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  id?: Maybe<Scalars['ID']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type MetadataConnection = {
  __typename?: 'MetadataConnection';
  edges?: Maybe<Array<Maybe<MetadataEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type MetadataEdge = {
  __typename?: 'MetadataEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Metadata>;
};

export type Model = {
  __typename?: 'Model';
  class_hash?: Maybe<Scalars['felt252']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type ModelConnection = {
  __typename?: 'ModelConnection';
  edges?: Maybe<Array<Maybe<ModelEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ModelEdge = {
  __typename?: 'ModelEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Model>;
};

export type ModelUnion = Authorization | Color | Condition | Connection | Land | PixelAddress | Player;

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PixelAddress = {
  __typename?: 'PixelAddress';
  entity?: Maybe<Entity>;
  pixel_address?: Maybe<Scalars['ContractAddress']['output']>;
  pixel_explanation?: Maybe<Scalars['felt252']['output']>;
};

export type PixelAddressConnection = {
  __typename?: 'PixelAddressConnection';
  edges?: Maybe<Array<Maybe<PixelAddressEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type PixelAddressEdge = {
  __typename?: 'PixelAddressEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<PixelAddress>;
};

export type PixelAddressOrder = {
  direction: OrderDirection;
  field: PixelAddressOrderField;
};

export enum PixelAddressOrderField {
  PixelAddress = 'PIXEL_ADDRESS',
  PixelExplanation = 'PIXEL_EXPLANATION'
}

export type PixelAddressWhereInput = {
  pixel_address?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  pixel_explanation?: InputMaybe<Scalars['felt252']['input']>;
  pixel_explanationEQ?: InputMaybe<Scalars['felt252']['input']>;
  pixel_explanationGT?: InputMaybe<Scalars['felt252']['input']>;
  pixel_explanationGTE?: InputMaybe<Scalars['felt252']['input']>;
  pixel_explanationLT?: InputMaybe<Scalars['felt252']['input']>;
  pixel_explanationLTE?: InputMaybe<Scalars['felt252']['input']>;
  pixel_explanationNEQ?: InputMaybe<Scalars['felt252']['input']>;
};

export type Player = {
  __typename?: 'Player';
  entity?: Maybe<Entity>;
  player_address?: Maybe<Scalars['ContractAddress']['output']>;
  player_land_position?: Maybe<Scalars['u8']['output']>;
  player_name?: Maybe<Scalars['felt252']['output']>;
  player_pixel_position?: Maybe<Scalars['u16']['output']>;
};

export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  edges?: Maybe<Array<Maybe<PlayerEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Player>;
};

export type PlayerOrder = {
  direction: OrderDirection;
  field: PlayerOrderField;
};

export enum PlayerOrderField {
  PlayerAddress = 'PLAYER_ADDRESS',
  PlayerLandPosition = 'PLAYER_LAND_POSITION',
  PlayerName = 'PLAYER_NAME',
  PlayerPixelPosition = 'PLAYER_PIXEL_POSITION'
}

export type PlayerWhereInput = {
  player_address?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_land_position?: InputMaybe<Scalars['u8']['input']>;
  player_land_positionEQ?: InputMaybe<Scalars['u8']['input']>;
  player_land_positionGT?: InputMaybe<Scalars['u8']['input']>;
  player_land_positionGTE?: InputMaybe<Scalars['u8']['input']>;
  player_land_positionLT?: InputMaybe<Scalars['u8']['input']>;
  player_land_positionLTE?: InputMaybe<Scalars['u8']['input']>;
  player_land_positionNEQ?: InputMaybe<Scalars['u8']['input']>;
  player_name?: InputMaybe<Scalars['felt252']['input']>;
  player_nameEQ?: InputMaybe<Scalars['felt252']['input']>;
  player_nameGT?: InputMaybe<Scalars['felt252']['input']>;
  player_nameGTE?: InputMaybe<Scalars['felt252']['input']>;
  player_nameLT?: InputMaybe<Scalars['felt252']['input']>;
  player_nameLTE?: InputMaybe<Scalars['felt252']['input']>;
  player_nameNEQ?: InputMaybe<Scalars['felt252']['input']>;
  player_pixel_position?: InputMaybe<Scalars['u16']['input']>;
  player_pixel_positionEQ?: InputMaybe<Scalars['u16']['input']>;
  player_pixel_positionGT?: InputMaybe<Scalars['u16']['input']>;
  player_pixel_positionGTE?: InputMaybe<Scalars['u16']['input']>;
  player_pixel_positionLT?: InputMaybe<Scalars['u16']['input']>;
  player_pixel_positionLTE?: InputMaybe<Scalars['u16']['input']>;
  player_pixel_positionNEQ?: InputMaybe<Scalars['u16']['input']>;
};

export type Query = {
  __typename?: 'Query';
  authorizationModels?: Maybe<AuthorizationConnection>;
  colorModels?: Maybe<ColorConnection>;
  conditionModels?: Maybe<ConditionConnection>;
  connectionModels?: Maybe<ConnectionConnection>;
  entities?: Maybe<EntityConnection>;
  entity: Entity;
  events?: Maybe<EventConnection>;
  landModels?: Maybe<LandConnection>;
  metadata: Metadata;
  metadatas?: Maybe<MetadataConnection>;
  model: Model;
  models?: Maybe<ModelConnection>;
  pixeladdressModels?: Maybe<PixelAddressConnection>;
  playerModels?: Maybe<PlayerConnection>;
  system: System;
  systemCall: SystemCall;
  systemCalls?: Maybe<SystemCallConnection>;
  systems?: Maybe<SystemConnection>;
};


export type QueryAuthorizationModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AuthorizationOrder>;
  where?: InputMaybe<AuthorizationWhereInput>;
};


export type QueryColorModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ColorOrder>;
  where?: InputMaybe<ColorWhereInput>;
};


export type QueryConditionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ConditionOrder>;
  where?: InputMaybe<ConditionWhereInput>;
};


export type QueryConnectionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ConnectionOrder>;
  where?: InputMaybe<ConnectionWhereInput>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLandModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<LandOrder>;
  where?: InputMaybe<LandWhereInput>;
};


export type QueryMetadataArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPixeladdressModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PixelAddressOrder>;
  where?: InputMaybe<PixelAddressWhereInput>;
};


export type QueryPlayerModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PlayerOrder>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QuerySystemArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySystemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  entityUpdated: Entity;
  modelRegistered: Model;
};


export type SubscriptionEntityUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionModelRegisteredArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type System = {
  __typename?: 'System';
  class_hash?: Maybe<Scalars['felt252']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  systemCalls: Array<SystemCall>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type SystemCall = {
  __typename?: 'SystemCall';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  system: System;
  system_id?: Maybe<Scalars['ID']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

export type SystemCallConnection = {
  __typename?: 'SystemCallConnection';
  edges?: Maybe<Array<Maybe<SystemCallEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SystemCallEdge = {
  __typename?: 'SystemCallEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<SystemCall>;
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  edges?: Maybe<Array<Maybe<SystemEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<System>;
};

export type GetEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesQuery = { __typename?: 'Query', entities?: { __typename?: 'EntityConnection', edges?: Array<{ __typename?: 'EntityEdge', node?: { __typename?: 'Entity', keys?: Array<string | null> | null, models?: Array<{ __typename: 'Authorization' } | { __typename: 'Color' } | { __typename: 'Condition' } | { __typename: 'Connection' } | { __typename: 'Land', land_id?: any | null, height?: any | null, width?: any | null } | { __typename: 'PixelAddress' } | { __typename: 'Player' } | null> | null } | null } | null> | null } | null };


export const GetEntitiesDocument = gql`
    query getEntities {
  entities(keys: ["%"]) {
    edges {
      node {
        keys
        models {
          __typename
          ... on Land {
            land_id
            height
            width
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetEntitiesDocumentString = print(GetEntitiesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getEntities(variables?: GetEntitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEntitiesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEntitiesQuery>(GetEntitiesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEntities', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;