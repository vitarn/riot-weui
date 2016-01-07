<app>
    <button class="weui_btn weui_btn_primary" onclick={ openActionSheet }>打开 Action Sheet</button>
    <weui-action-sheet show={ showActionSheet } onclose={ closeActionSheet }>
        <weui-action-sheet-cell onclick={ parent.clickActionSheetMenu0 }>
            <i>关闭 Action Sheet</i>
        </weui-action-sheet-cell>
        <weui-action-sheet-cell onclick={ parent.clickActionSheetMenu1 }>
            <b>菜单一</b>
        </weui-action-sheet-cell>
        <weui-action-sheet-cell onclick={ parent.clickActionSheetMenu2 }>
            <i>菜单二</i>
        </weui-action-sheet-cell>
    </weui-action-sheet>


    <script type="babel" src="./app.js"></script>
</app>
