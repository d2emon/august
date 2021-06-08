<template>
  <v-list
    nav
    dense
  >
    <v-list-item-group>
      <v-list-item
        v-for="item in menu"
        :key="item.id"
        :to="item.to"
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'AdminNavigation',
  data: () => ({
    menu: [
      {
        id: 1,
        title: 'Пользователи',
        to: '/admin/user',
      },
      {
        id: 2,
        title: 'Соцсети',
        to: '/admin/social',
      },
      {
        id: 3,
        title: 'Проекты',
        to: '/admin/project',
      },
      {
        id: 4,
        title: 'Услуги',
        to: '/admin/service',
      },
      {
        id: 5,
        title: 'Страницы',
        to: '/admin/wiki',
      },
      {
        id: 6,
        title: 'Категории',
        to: '/admin/category',
      },
      {
        id: 7,
        title: 'Блог',
        to: '/admin/article',
      },
      {
        id: 8,
        title: 'Рассылка',
        to: '/admin/email',
      },
    ],
  }),
};
</script>
