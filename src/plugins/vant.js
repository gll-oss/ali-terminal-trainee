import Vue from 'vue'

import { Tabbar, TabbarItem, NavBar, Cell, CellGroup, Icon, Grid, GridItem, Image as VanImage } from 'vant'
import 'vant/lib/index.css'

const components = [
  Tabbar,
  TabbarItem,
  NavBar,
  Cell,
  CellGroup,
  Icon,
  Grid,
  GridItem,
  VanImage
]

components.forEach(component => {
  Vue.use(component)
})
