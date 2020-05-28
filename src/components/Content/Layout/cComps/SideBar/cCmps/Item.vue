<script>
export default {
  functional: true,
  name: "Item",
  props: {
    icon: {
      type: String,
      default: "el-icon-menu"
    },
    text: {
      type: String,
      default: "菜单"
    }
  },
  render: (h, context) => {
    const { icon, text } = context.props
    const vnodes=[]
    vnodes.push(h("i",{class:icon}))
    vnodes.push(h("span",{solt:"title"},text))
    return vnodes
  }
}
</script>
