export enum TILE_TYPE_ENUM {
    WALL_LEFT_TOP = 'WALL_LEFT_TOP',
    WALL_COLUMN = 'WALL_COLUMN',
    WALL_LEFT_BOTTOM = 'WALL_LEFT_BOTTOM',
    CLIFF_LEFT = 'CLIFF_LEFT',
    FLOOR = 'FLOOR',
    WALL_ROW = 'WALL_ROW',
    CLIFF_CENTER = 'CLIFF_CENTER',
    WALL_RIGHT_BOTTOM = 'WALL_RIGHT_BOTTOM',
    WALL_RIGHT_TOP = 'WALL_RIGHT_TOP',
    CLIFF_RIGHT = 'CLIFF_RIGHT'
}

export enum ENUM_EVENT {
    ENUM_NEXTLEVEL = 'ENUM_NEXTLEVEL',
    ENUM_MOVE_PLAYER = 'ENUM_MOVE_PLAYER'
}

export enum ENUM_MOVE {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    TURNLEFT = 'TURNLEFT',
    TURNRIGHT = 'TURNRIGHT'
}

export enum FSM_PARAMS_TYPE_ENUM {
    TRIGGER = 'TRIGGER',
    NUMBER = 'NUMBER'
}

export enum PARAMS_NAME_TYPE {
    IDEL = 'IDLE',
    TURNLEFT = 'TURNLEFT'
}