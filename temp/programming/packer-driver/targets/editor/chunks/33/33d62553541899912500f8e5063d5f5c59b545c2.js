System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BlockInputEvents, Color, Component, game, Graphics, UITransform, view, _decorator, _dec, _class, _crd, ccclass, SCREEN_WIDTH, SCREEN_HEIGHT, DEFAULT_FADE_DURATION, FadeStatus, DrawManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BlockInputEvents = _cc.BlockInputEvents;
      Color = _cc.Color;
      Component = _cc.Component;
      game = _cc.game;
      Graphics = _cc.Graphics;
      UITransform = _cc.UITransform;
      view = _cc.view;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0b66NQ0YFM65QYvH7uVnxG", "DrawManager", undefined);

      __checkObsolete__(['BlockInputEvents', 'Color', 'Component', 'game', 'Graphics', 'UITransform', 'view', '_decorator']);

      ({
        ccclass
      } = _decorator);
      SCREEN_WIDTH = view.getVisibleSize().width;
      SCREEN_HEIGHT = view.getVisibleSize().height;

      _export("DEFAULT_FADE_DURATION", DEFAULT_FADE_DURATION = 200);

      (function (FadeStatus) {
        FadeStatus[FadeStatus["IDLE"] = 0] = "IDLE";
        FadeStatus[FadeStatus["FADE_IN"] = 1] = "FADE_IN";
        FadeStatus[FadeStatus["FADE_OUT"] = 2] = "FADE_OUT";
      })(FadeStatus || (FadeStatus = {}));

      _export("DrawManager", DrawManager = (_dec = ccclass('DrawManager'), _dec(_class = class DrawManager extends Component {
        constructor(...args) {
          super(...args);
          this.oldTime = 0;
          this.duration = DEFAULT_FADE_DURATION;
          this.fadeStatus = FadeStatus.IDLE;
          this.fadeResolve = void 0;
          this.faderNode = void 0;
          this.ctx = void 0;
          this.block = void 0;
        }

        init() {
          this.block = this.addComponent(BlockInputEvents);
          this.ctx = this.addComponent(Graphics);
          const transform = this.getComponent(UITransform);
          transform.setAnchorPoint(0.5, 0.5);
          transform.setContentSize(SCREEN_WIDTH, SCREEN_HEIGHT);
          this.setAlpha(1);
        }

        setAlpha(percent) {
          this.ctx.clear();
          this.ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
          this.ctx.fillColor = new Color(0, 0, 0, 255 * percent);
          this.ctx.fill();
          this.block.enabled = percent === 1;
        }

        update() {
          const fadePercent = (game.totalTime - this.oldTime) / this.duration; // console.log('fadePercent:', fadePercent)

          switch (this.fadeStatus) {
            case FadeStatus.FADE_IN:
              if (fadePercent < 1) {
                this.setAlpha(fadePercent);
              } else {
                this.fadeStatus = FadeStatus.IDLE;
                this.setAlpha(1);
                this.fadeResolve(null);
              }

              break;

            case FadeStatus.FADE_OUT:
              if (fadePercent < 1) {
                this.setAlpha(1 - fadePercent);
              } else {
                this.fadeStatus = FadeStatus.IDLE;
                this.setAlpha(0);
                this.fadeResolve(null);
              }

              break;

            default:
              break;
          }
        }

        fadeIn(duration = DEFAULT_FADE_DURATION) {
          this.setAlpha(0);
          this.duration = duration;
          this.fadeStatus = FadeStatus.FADE_IN;
          this.oldTime = game.totalTime;
          return new Promise(resolve => {
            this.fadeResolve = resolve;
          });
        }

        fadeOut(duration = DEFAULT_FADE_DURATION) {
          this.setAlpha(1);
          this.duration = duration;
          this.fadeStatus = FadeStatus.FADE_OUT;
          this.oldTime = game.totalTime;
          return new Promise(resolve => {
            this.fadeResolve = resolve;
          });
        }

        mask() {
          this.setAlpha(1);
          return new Promise(resolve => {
            setTimeout(resolve, DEFAULT_FADE_DURATION);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=33d62553541899912500f8e5063d5f5c59b545c2.js.map