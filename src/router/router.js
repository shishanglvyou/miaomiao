export default [
  {
    path:'/',
    redirect:'/movie'
  },
  {
    path:'/movie',
    component:()=>import('@/views/Movie'),
    children:[
      {
        path:'city',
        component:()=>import('@/components/City')
      },
      {
        path:'nowPlaying',
        component:()=>import('@/components/NowPlaying')
      },
      {
        path:'comingSoon',
        component:()=>import('@/components/ComingSoon')
      },
      {
        path:'search',
        component:()=>import('@/components/Search')
      },
      {
        path:'/movie',
        redirect: '/movie/nowPlaying'
      }
    ]
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
