System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, animation, AnimationClip, Sprite, SpriteAtlas, ResourceLoadMgr, testSort, State, _crd, ANIMATION_SPEED;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResourceLoadMgr(extras) {
    _reporterNs.report("ResourceLoadMgr", "./ResourceLoadMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOftestSort(extras) {
    _reporterNs.report("testSort", "../Utils", _context.meta, extras);
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
      testSort = _unresolved_3.testSort;
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
            var index = 0; // let sortSpFrames = sortSpriteFrame(spFrames)

            (_crd && testSort === void 0 ? (_reportPossibleCrUseOftestSort({
              error: Error()
            }), testSort) : testSort)(spFrames);

            for (var key in spFrames) {
              if (Object.prototype.hasOwnProperty.call(spFrames, key)) {
                var element = spFrames[key];
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
          this.fsm.animationCom.defaultClip = this.animationClip;
          this.fsm.animationCom.play();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a235c276af00c36426184d634718aa1ba0ca069b.js.map