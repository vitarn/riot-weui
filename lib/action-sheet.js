riot.tag2('weui-action-sheet', '<div class="weui_mask_transition {weui_fade_toggle: opts.show}" show="{opts.show}" onclick="{opts.onclose}"></div><div class="weui_actionsheet {weui_actionsheet_toggle: opts.show}"><div class="weui_actionsheet_menu"><yield></yield></div><div class="weui_actionsheet_action"><div class="weui_actionsheet_cell" onclick="{opts.onclose}">取消</div></div></div>', 'weui-action-sheet .weui_mask_transition,[riot-tag="weui-action-sheet"] .weui_mask_transition{display:block}', '', function(opts) {
"use strict";
}, '{ }');

riot.tag2('weui-action-sheet-cell', '<yield></yield>', 'weui-action-sheet-cell,[riot-tag="weui-action-sheet-cell"]{display:block}', 'class="weui_actionsheet_cell"', function(opts) {
});
