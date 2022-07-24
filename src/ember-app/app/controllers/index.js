import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s15.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s15.title'),
          children: [{
            link: 'i-i-s-i-s-s15-вид-поддержки-l',
            caption: i18n.t('forms.application.sitemap.i-s-s15.i-i-s-i-s-s15-вид-поддержки-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s15.i-i-s-i-s-s15-вид-поддержки-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-i-s-s15-пользователь-l',
            caption: i18n.t('forms.application.sitemap.i-s-s15.i-i-s-i-s-s15-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s15.i-i-s-i-s-s15-пользователь-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-i-s-s15-условие-l',
            caption: i18n.t('forms.application.sitemap.i-s-s15.i-i-s-i-s-s15-условие-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s15.i-i-s-i-s-s15-условие-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})