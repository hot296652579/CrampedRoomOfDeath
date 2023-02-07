System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, UITransform, Layers, _crd, createNewNode;

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

      __checkObsolete__(['Component', '_decorator', 'Node', 'UITransform', 'Layers']);

      _export("createNewNode", createNewNode = (name = '') => {
        const node = new Node();
        const transfrom = node.addComponent(UITransform);
        transfrom.setAnchorPoint(0, 1);
        node.layer = 1 << Layers.nameToLayer('UI_2D');
        return node;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5e1045b09509dfa9b56da16dc63e0a2f97556907.js.map