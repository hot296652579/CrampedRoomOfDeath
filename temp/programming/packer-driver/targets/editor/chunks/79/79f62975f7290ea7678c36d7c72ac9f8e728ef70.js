System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, UITransform, Layers, _crd, createNewNode, randomTileByrange, getNumByName, sortSpriteFrame;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Layers = _cc.Layers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e9f7zgb3hET4oIyZ5uXSGm", "index", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'UITransform', 'Layers', 'SpriteFrame', 'math', 'sp']);

      _export("createNewNode", createNewNode = (name = '') => {
        const node = new Node();
        const transfrom = node.addComponent(UITransform);
        transfrom.setAnchorPoint(0, 1);
        node.layer = 1 << Layers.nameToLayer('UI_2D');
        return node;
      });

      _export("randomTileByrange", randomTileByrange = (start, end) => {
        return Math.floor(Math.random() * (start + (end - start)));
      });

      getNumByName = spname => {
        const reg = /\((\d+)\)/;
        return parseInt(spname.match(reg)[1]) || 0;
      };

      _export("sortSpriteFrame", sortSpriteFrame = spFrames => {
        let arr = [];

        for (const key in spFrames) {
          spFrames[key].name = key;
          arr.push(spFrames[key]);
        }

        return arr.sort((a, b) => getNumByName(a.name) - getNumByName(b.name));
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=79f62975f7290ea7678c36d7c72ac9f8e728ef70.js.map