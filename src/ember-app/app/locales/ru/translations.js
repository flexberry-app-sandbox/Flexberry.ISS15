import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISISS15ВидПоддержкиLForm from './forms/i-i-s-i-s-s15-вид-поддержки-l';
import IISISS15ПользовательLForm from './forms/i-i-s-i-s-s15-пользователь-l';
import IISISS15УсловиеLForm from './forms/i-i-s-i-s-s15-условие-l';
import IISISS15ВидПоддержкиEForm from './forms/i-i-s-i-s-s15-вид-поддержки-e';
import IISISS15ПользовательEForm from './forms/i-i-s-i-s-s15-пользователь-e';
import IISISS15УсловиеEForm from './forms/i-i-s-i-s-s15-условие-e';
import IISISS15ВидПоддержкиModel from './models/i-i-s-i-s-s15-вид-поддержки';
import IISISS15ПользовательModel from './models/i-i-s-i-s-s15-пользователь';
import IISISS15УсловиеModel from './models/i-i-s-i-s-s15-условие';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s15-вид-поддержки': IISISS15ВидПоддержкиModel,
    'i-i-s-i-s-s15-пользователь': IISISS15ПользовательModel,
    'i-i-s-i-s-s15-условие': IISISS15УсловиеModel
  },

  'application-name': 'I s s15',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s15',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s15',
          title: 'I s s15'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'i-s-s15': {
          caption: 'ISS15',
          title: 'ISS15',
          'i-i-s-i-s-s15-вид-поддержки-l': {
            caption: 'Вид поддержки',
            title: ''
          },
          'i-i-s-i-s-s15-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-i-s-s15-условие-l': {
            caption: 'УсловиеL',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-i-s-s15-вид-поддержки-l': IISISS15ВидПоддержкиLForm,
    'i-i-s-i-s-s15-пользователь-l': IISISS15ПользовательLForm,
    'i-i-s-i-s-s15-условие-l': IISISS15УсловиеLForm,
    'i-i-s-i-s-s15-вид-поддержки-e': IISISS15ВидПоддержкиEForm,
    'i-i-s-i-s-s15-пользователь-e': IISISS15ПользовательEForm,
    'i-i-s-i-s-s15-условие-e': IISISS15УсловиеEForm
  },

});

export default translations;
