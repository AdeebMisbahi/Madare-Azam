
export const LINKS = [
    {name: 'Zinda Shah Madar', to: '/',
     subMenu: true,
     sub_LINKS: [
      { name:'Introduction', to:'/', },
      { name: 'Shajra', to:'/', },
      { name: 'Alqabaat', to:'/', },
      { name: 'Books', to: '/',},
     ]
    },
    {name: 'Khadim Sajjada Nashin', to: '/',
    subMenu: true,
    sub_LINKS: [
     { name: 'Syed Mujibul Baqi', to:'/', },
     { name: 'Syed Misbahul Murad', to:'/', },
     { name: 'Syed Faizul Murad', to:'/', },
    ]},
    {name: 'Sufism', to: '/',  },
    {name: 'Contribution', to: '/'},
    {name: 'About', to: '/'},
  ];
export const MOBILE_LINKS = [{name: 'Adeeb', to: '/'}, ...LINKS]  