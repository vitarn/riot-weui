<weui-action-sheet>
    <div class="weui_mask_transition { weui_fade_toggle: opts.show }"
        show={ opts.show }
        onclick={ opts.onclose }></div>
    <div class="weui_actionsheet { weui_actionsheet_toggle: opts.show }">
        <div class="weui_actionsheet_menu">
            <yield />
        </div>
        <div class="weui_actionsheet_action">
            <weui-action-sheet-cell onclick={ opts.onclose }>取消</weui-action-sheet-cell>
        </div>
    </div>

    <style type="less" scoped>
    .weui_mask_transition {
        display: block;
    }
    </style>

    <script type="babel">

    </script>
</weui-action-sheet>

<weui-action-sheet-cell class="weui_actionsheet_cell">
    <yield />

    <style type="less" scoped>
    :scope {
        display: block;
    }
    </style>
</weui-action-sheet-cell>
