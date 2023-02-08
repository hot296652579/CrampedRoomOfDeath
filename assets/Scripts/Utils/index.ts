import { Component, _decorator, Node, UITransform, Layers } from "cc";
export const createNewNode = (name: string = '') => {
    const node = new Node()
    const transfrom = node.addComponent(UITransform)
    transfrom.setAnchorPoint(0, 1)

    node.layer = 1 << Layers.nameToLayer('UI_2D')
    return node
}

export const randomTileByrange = (start: number, end: number) => {
    return Math.floor(Math.random() * (start + (end - start)))
}