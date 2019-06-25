export default [
  {
    path:'/movie',
    component:()=>import('@/views/Movie')
  },
  {
    path:'/mine',
    component:()=>import('@/views/Mine')
  },
  {
    path:'/cinema',
    component:()=>import('@/views/Cinema')
  }
]
