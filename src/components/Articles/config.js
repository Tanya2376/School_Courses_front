export default [
   {
      id: 'kak_raspredelit_vremya_na_ekzamene',
      title: 'Как распределить время на экзамене, чтобы успешно сдать ЕГЭ',
      description: 'До ЕГЭ осталось всего ничего… Как не выдохнуться во время подготовки и настроить себя на успешную сдачу экзамена, рассказываем в этой статье.',
      path: '/articles/kak_raspredelit_vremya_na_ekzamene',
      component: () => import('@/components/Articles/StatyiaPervaya/StatyiaPervaya.vue'),
      seo: {
         title: 'Как распределить время на экзамене, чтобы успешно сдать ЕГЭ',
         description: 'На примере ЕГЭ по русскому языку, математике и биологии рассказываем про нюансы распределения времени на экзаменах'
      }
   },
   {
      id: 'neudacha_na_ege_podavaite_appeliciyu',
      title: 'Неудача на ЕГЭ. Подавайте апелляцию',
      description: 'Жалобы участников ЕГЭ, их родителей (законных представителей) а также все спорные вопросы по итогам ЕГЭ рассматривает конфликтная комиссия. Кроме конфликтной комиссии в каждом субъекте РФ создаются государственные экзаменационные комиссии (ГЭК)',
      path: '/articles/neudacha_na_ege_podavaite_appeliciyu',
      component: () => import('@/components/Articles/StatyaVtoraya/StatyaVtoraya.vue'),
      seo: {
         title: 'Неудача на ЕГЭ. Подавайте апелляцию',
         description: 'Жалобы участников ЕГЭ, их родителей (законных представителей) а также все спорные вопросы по итогам ЕГЭ рассматривает конфликтная комиссия. Кроме конфликтной комиссии в каждом субъекте РФ создаются государственные экзаменационные комиссии (ГЭК)'
      }
   },
   {
      id: 'chto_takoe_demoversiya_i_zachem_ona_nuzna',
      title: 'Что такое демоверсия и зачем она нужна',
      description: 'Демоверсия нужна для того, чтобы выпускник знал, какие задания ожидают его на экзамене, составил представление о структуре будущих КИМ, количестве заданий, об их форме и уровне сложности.',
      path: '/articles/chto_takoe_demoversiya_i_zachem_ona_nuzna',
      component: () => import('@/components/Articles/StatyaTretya/StatyaTretya.vue'),
      seo: {
         title: 'Что такое демоверсия и зачем она нужна',
         description: 'Демоверсия нужна для того, чтобы выпускник знал, какие задания ожидают его на экзамене, составил представление о структуре будущих КИМ, количестве заданий, об их форме и уровне сложности.'
      }
   },
   {
      id: 'soveti_ekspertov_oge_dlya_podgotovki_s_0',
      title: 'Советы экспертов ОГЭ для подготовки с нуля',
      description: 'Во время составления конспектов, планов и расписаний пользуйтесь цветными маркерами, стикерами, наклейками',
      path: '/articles/soveti_ekspertov_oge_dlya_podgotovki_s_0',
      component: () => import('@/components/Articles/StatyaChetvertaya/StatyaChetvertaya.vue'),
      seo: {
         title: 'Советы экспертов ОГЭ для подготовки с нуля',
         description: 'Во время составления конспектов, планов и расписаний пользуйтесь цветными маркерами, стикерами, наклейками'
      }
   },
   {
      id: 'pravila_i_soveti_pri_podgotovke_r_ekzamenam',
      title: 'Правила и советы при подготовке к экзаменам',
      description: 'Подготовка к экзаменам — это стресс. Предстоит выучить горы информации, постоянно довлеет моральная ответственность за  будущее.',
      path: '/articles/pravila_i_soveti_pri_podgotovke_r_ekzamenam',
      component: () => import('@/components/Articles/StatyaPyataya/StatyaPyataya.vue'),
      seo: {
         title: 'Правила и советы при подготовке к экзаменам',
         description: 'Подготовка к экзаменам — это стресс. Предстоит выучить горы информации, постоянно довлеет моральная ответственность за  будущее.'
      }

   },
   {
      id: 'OGE_etapi_provedeniya_and_soviet',
      title: 'ОГЭ.Этапы проведения и советы',
      description: 'Во время составления конспектов, планов и расписаний пользуйтесь цветными маркерами, стикерами, наклейками',
      path: '/articles/OGE_etapi_provedeniya_and_soviet',
      component: () => import('@/components/Articles/StatyaShestaya/StatyaShestaya.vue'),
      seo: {
         title: 'ОГЭ.Этапы проведения и советы',
         description: 'Во время составления конспектов, планов и расписаний пользуйтесь цветными маркерами, стикерами, наклейками'
      }
   }
]