export enum OpCode {
  Event,
  Identify,
  Hello,
  Heartbeat,
  HeartBeatACK,
}

export enum CloseEventCode {
  UnknownError = 4000,
  AuthFailed = 4004,
  AlreadyAuth = 4005,
}

export enum WSEvent {
  INITIAL_STATE = 'INITIAL_STATE',
  USER_CONNECTED = 'USER_CONNECTED',
  USER_DISCONNECTED = 'USER_DISCONNECTED',
  MESSAGE_CREATE = 'MESSAGE_CREATE',
}

export enum AuthLevel {
  Common,
  Moderator,
  Administrator,
  Developer,
}

export const HEARTBEAT_INTERVAL = 120000;

export const DefaultAvatars = [
  'https://i.pinimg.com/736x/cb/ac/3c/cbac3cf097281ff136f49c55ffaa65af.jpg',
];

export const AuthTag = {
  [AuthLevel.Common]: {
    name: 'Membro',
    color: '#303030',
  },
  [AuthLevel.Moderator]: {
    name: 'Mod',
    color: '#00ad17',
  },
  [AuthLevel.Administrator]: {
    name: 'Admin',
    color: '#005eff',
  },
  [AuthLevel.Developer]: {
    name: 'Dev',
    color: '#ff0037',
  },
};

export const DeviceWidth = {
  Mobile: 380,
  Tablet: 768,
  PC: 1280,
};