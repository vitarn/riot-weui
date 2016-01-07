/**
 * Action Sheet
 */

this.showActionSheet = false
this.openActionSheet = e => {
  this.showActionSheet = true
  console.log('打开 Action Sheet')
}
this.closeActionSheet = e => {
  this.showActionSheet = false
  console.log('关闭 Action Sheet')
}
this.clickActionSheetMenu0 = e => {
  alert('点击关闭 Action Sheet')
  this.showActionSheet = false
}
this.clickActionSheetMenu1 = e => {
  alert('点击菜单一')
}
this.clickActionSheetMenu2 = e => {
  alert('点击菜单二')
}
