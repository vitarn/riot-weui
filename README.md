# riot-weui

[![Greenkeeper badge](https://badges.greenkeeper.io/vitarn/riot-weui.svg)](https://greenkeeper.io/)
weui for riot

## Action Sheet

### weui-action-sheet

`opts`:
* `show`: Control if action sheet opening.
* `onclose`: Event fire on action sheet closed.

#### weui-action-sheet-cell
pay attention `parent.`

```html
<main>
    <weui-action-sheet show={ isShow }
        onclose={ close }>
        <weui-action-sheet-cell onclick={ parent.clickmenu }>
            <b>菜单项</b>
        </weui-action-sheet-cell>
    </weui-action-sheet>

    <script type="babel">
    this.isShow = true
    this.close = e => console.log('close')
    this.clickmenu = e => console.log('click')
    </script>
</main>
```
