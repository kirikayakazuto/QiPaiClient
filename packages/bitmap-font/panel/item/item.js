let fs=require("fire-fs"),packageName="bitmap-font",CfgUtil=Editor.require("packages://bitmap-font/core/CfgUtil");module.exports={init(){Vue.component("char-item",{props:["data","index"],template:fs.readFileSync(Editor.url("packages://"+packageName+"/panel/item/item.html","utf8"))+"",created(){this.$nextTick(function(){this.onInputChar(),this.onMouseOut()})},methods:{onMenu(t){Editor.Ipc.sendToMain("bitmap-font:popup-create-menu",t.x,t.y,this.data)},onMouseOver(){this.$el.style.backgroundColor="#777"},onMouseOut(){let t="#333";t=this.index%2?"#333":"#444",this.$el.style.backgroundColor=t},onInputChar(){let t=this.$el.getElementsByClassName("charBg")[0];if(t){let e=!1;if(this.data.char&&(e=window.plugin.checkIsContentRepeatChar(this.data.char))&&(this.data.char=null),null===this.data.char||""===this.data.char||!0===e){t.style.backgroundColor="#ff342e";this.$el.getElementsByClassName("charInput")[0]}else this.data.char.length>1&&(this.data.char=this.data.char[0]),t.style.backgroundColor=this.$el.style.backgroundColor}CfgUtil.saveConfig()},onClickBtnDel(t){window.plugin.delCharCfg(this.data)}},computed:{}})}};