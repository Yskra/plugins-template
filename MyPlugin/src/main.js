import styles from 'virtual:styles';
import { ref, toRef } from 'vue';
import enLocale from '../locales/en-US.json';
import ruLocale from '../locales/ru-RU.json';
import MyComponent from './components/MyComponent.vue';

// noinspection JSUnusedGlobalSymbols
export default function plugin({ router, useStyle, defineSettings, defineLocales }) {
  useStyle(styles);

  defineLocales({
    'ru-RU': ruLocale,
    'en-US': enLocale,
  });

  router.addRoute({
    name: 'MyComponentTest',
    path: 'test',
    component: MyComponent,
  });

  const url = ref();

  defineSettings([
    {
      name: 'apiEndpoint',
      ref: url,
      type: 'url',
    },
    {
      name: 'token',
      description: 'tokenNote',
      ref: toRef(null, 'token'),
      type: 'text',
    },
    {
      name: 'language',
      description: 'languageNote',
      ref: toRef(null, 'language'),
      type: 'select',
      options: [
        { name: 'auto', value: '' },
        { name: 'Русский', value: 'ru-RU' },
        { name: 'English', value: 'en-US' },
      ],
    },
  ]);
}
