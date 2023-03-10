System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, animation, AnimationClip, Sprite, SpriteAtlas, ResourceLoadMgr, sortSpriteFrame, State, _crd, ANIMATION_SPEED;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResourceLoadMgr(extras) {
    _reporterNs.report("ResourceLoadMgr", "./ResourceLoadMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsortSpriteFrame(extras) {
    _reporterNs.report("sortSpriteFrame", "../Utils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      animation = _cc.animation;
      AnimationClip = _cc.AnimationClip;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      ResourceLoadMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      sortSpriteFrame = _unresolved_3.sortSpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a63a5C4CZAQaPiq5B6A4by", "State", undefined);

      __checkObsolete__(['animation', 'AnimationClip', 'Sprite', 'SpriteAtlas', 'SpriteFrame']);

      // import { sortSpriteFrame } from "../Utils";
      ANIMATION_SPEED = 1 / 8;
      /**????????????????????????*/

      _export("default", State = class State {
        constructor(fsm, path, isLoop) {
          if (isLoop === void 0) {
            isLoop = AnimationClip.WrapMode.Normal;
          }

          this.animationClip = void 0;
          this.fsm = fsm;
          this.path = path;
          this.isLoop = isLoop;
          this.init();
        }

        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var promise = (_crd && ResourceLoadMgr === void 0 ? (_reportPossibleCrUseOfResourceLoadMgr({
              error: Error()
            }), ResourceLoadMgr) : ResourceLoadMgr).Instance.loadRes(_this.path, SpriteAtlas);

            _this.fsm.waitList.push(promise);

            var spriteAtlas = yield promise;
            _this.animationClip = new AnimationClip();
            var track = new animation.ObjectTrack(); // ????????????????????????

            track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // ?????????????????? ????????????

            var spFrames = spriteAtlas.spriteFrames;
            var frams = [];
            var index = 0;
            var sortSpFrames = (_crd && sortSpriteFrame === void 0 ? (_reportPossibleCrUseOfsortSpriteFrame({
              error: Error()
            }), sortSpriteFrame) : sortSpriteFrame)(spFrames);

            for (var key in sortSpFrames) {
              if (Object.prototype.hasOwnProperty.call(sortSpFrames, key)) {
                var element = sortSpFrames[key];
                frams.push([ANIMATION_SPEED * index, element]);
                index++;
              }
            } // console.log(frams)


            track.channel.curve.assignSorted(frams); // // ?????????????????????????????????????????????

            _this.animationClip.addTrack(track);

            _this.animationClip.name = _this.path;
            _this.animationClip.wrapMode = _this.isLoop;
            _this.animationClip.duration = frams.length * ANIMATION_SPEED; // ???????????????????????????
          })();
        }

        run() {
          var _this$fsm$animationCo, _this$fsm$animationCo2;

          if (((_this$fsm$animationCo = this.fsm.animationCom) == null ? void 0 : (_this$fsm$animationCo2 = _this$fsm$animationCo.defaultClip) == null ? void 0 : _this$fsm$animationCo2.name) === this.animationClip.name) return;
          this.fsm.animationCom.defaultClip = this.animationClip;
          this.fsm.animationCom.play();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=afb81c0afa955d71b5b23793b42fd942213b3c51.js.map