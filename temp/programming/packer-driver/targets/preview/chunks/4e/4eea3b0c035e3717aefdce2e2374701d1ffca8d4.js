System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, ENITIY_TYPE_SPIKES_ENUM, PARAMS_NAME_TYPE, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM, getParamsInitNumber, StateMachine, SpikesFourSubStateMachine, SpikesMgr, SpikesOneSubStateMachine, SpikesThreeSubStateMachine, SpikesTwoSubStateMachine, _dec, _class, _crd, ccclass, property, SpikeStateMachine;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM(extras) {
    _reporterNs.report("ENITIY_TYPE_SPIKES_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetParamsInitNumber(extras) {
    _reporterNs.report("getParamsInitNumber", "../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesFourSubStateMachine(extras) {
    _reporterNs.report("SpikesFourSubStateMachine", "./SpikesFourStateMahine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesMgr(extras) {
    _reporterNs.report("SpikesMgr", "./SpikesMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesOneSubStateMachine(extras) {
    _reporterNs.report("SpikesOneSubStateMachine", "./SpikesOneSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesThreeSubStateMachine(extras) {
    _reporterNs.report("SpikesThreeSubStateMachine", "./SpikesThreeStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesTwoSubStateMachine(extras) {
    _reporterNs.report("SpikesTwoSubStateMachine", "./SpikesTwoSubStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      ENITIY_TYPE_SPIKES_ENUM = _unresolved_2.ENITIY_TYPE_SPIKES_ENUM;
      PARAMS_NAME_TYPE = _unresolved_2.PARAMS_NAME_TYPE;
      SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM = _unresolved_2.SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM;
    }, function (_unresolved_3) {
      getParamsInitNumber = _unresolved_3.getParamsInitNumber;
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      SpikesFourSubStateMachine = _unresolved_4.default;
    }, function (_unresolved_5) {
      SpikesMgr = _unresolved_5.SpikesMgr;
    }, function (_unresolved_6) {
      SpikesOneSubStateMachine = _unresolved_6.default;
    }, function (_unresolved_7) {
      SpikesThreeSubStateMachine = _unresolved_7.default;
    }, function (_unresolved_8) {
      SpikesTwoSubStateMachine = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0c9fQr+0lEHaoaw5WYwuI/", "SpikeStateMachine", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'AnimationClip', 'Animation', 'SpriteFrame', 'SpriteAtlas']);

      // import { DataManager.Instance } from "../Runtime/DataManager";
      ({
        ccclass,
        property
      } = _decorator);

      _export("SpikeStateMachine", SpikeStateMachine = (_dec = ccclass('SpikeStateMachine'), _dec(_class = class SpikeStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
        error: Error()
      }), StateMachine) : StateMachine) {
        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.animationCom = _this.addComponent(Animation);

            _this.initParams();

            _this.initSateMachine();

            _this.addAnimationEvent();

            yield Promise.all(_this.waitList);
          })();
        }

        initParams() {
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).SPIKES_CUR_COUNT, (_crd && getParamsInitNumber === void 0 ? (_reportPossibleCrUseOfgetParamsInitNumber({
            error: Error()
          }), getParamsInitNumber) : getParamsInitNumber)());
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).SPIKES_TOTAL_COUNT, (_crd && getParamsInitNumber === void 0 ? (_reportPossibleCrUseOfgetParamsInitNumber({
            error: Error()
          }), getParamsInitNumber) : getParamsInitNumber)());
        }

        initSateMachine() {
          this.stateMachine.set((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
            error: Error()
          }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_ONE, new (_crd && SpikesOneSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesOneSubStateMachine({
            error: Error()
          }), SpikesOneSubStateMachine) : SpikesOneSubStateMachine)(this));
          this.stateMachine.set((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
            error: Error()
          }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_TWO, new (_crd && SpikesTwoSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesTwoSubStateMachine({
            error: Error()
          }), SpikesTwoSubStateMachine) : SpikesTwoSubStateMachine)(this));
          this.stateMachine.set((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
            error: Error()
          }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_THREE, new (_crd && SpikesThreeSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesThreeSubStateMachine({
            error: Error()
          }), SpikesThreeSubStateMachine) : SpikesThreeSubStateMachine)(this));
          this.stateMachine.set((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
            error: Error()
          }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_FOUR, new (_crd && SpikesFourSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesFourSubStateMachine({
            error: Error()
          }), SpikesFourSubStateMachine) : SpikesFourSubStateMachine)(this));
        }

        addAnimationEvent() {
          this.animationCom.on(Animation.EventType.FINISHED, () => {
            var animationName = this.animationCom.defaultClip.name;
            var value = this.getParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
              error: Error()
            }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).SPIKES_TOTAL_COUNT).value;

            if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_ONE && animationName.includes('spikestwo') || value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_TWO && animationName.includes('spikesthree') || value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_THREE && animationName.includes('spikesfour') || value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_FOUR && animationName.includes('spikesfive')) {
              this.node.getComponent(_crd && SpikesMgr === void 0 ? (_reportPossibleCrUseOfSpikesMgr({
                error: Error()
              }), SpikesMgr) : SpikesMgr).countToZero();
            }
          });
        }

        run() {
          var value = this.getParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).SPIKES_TOTAL_COUNT).value;

          switch (this.currentSate) {
            case this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
              error: Error()
            }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_ONE):
            case this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
              error: Error()
            }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_TWO):
            case this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
              error: Error()
            }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_THREE):
            case this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
              error: Error()
            }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_FOUR):
              if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_ONE) {
                this.currentSate = this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
                  error: Error()
                }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_ONE);
              } else if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_TWO) {
                this.currentSate = this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
                  error: Error()
                }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_TWO);
              } else if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_THREE) {
                this.currentSate = this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
                  error: Error()
                }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_THREE);
              } else if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_FOUR) {
                this.currentSate = this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
                  error: Error()
                }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_FOUR);
              } else {
                this.currentSate = this.currentSate;
              }

              break;

            default:
              this.currentSate = this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
                error: Error()
              }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_ONE);
              break;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4eea3b0c035e3717aefdce2e2374701d1ffca8d4.js.map