import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s15',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s15',
          title: 'I s s15'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
