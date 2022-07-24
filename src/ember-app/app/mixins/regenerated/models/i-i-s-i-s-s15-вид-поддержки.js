import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  описание: DS.attr('string'),
  номерПоддержки: DS.attr('string'),
  пользователь: DS.belongsTo('i-i-s-i-s-s15-пользователь', { inverse: null, async: false }),
  условие: DS.hasMany('i-i-s-i-s-s15-условие', { inverse: 'видПоддержки', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s15-вид-поддержки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-i-s-s15-вид-поддержки.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПоддержки: {
    descriptionKey: 'models.i-i-s-i-s-s15-вид-поддержки.validations.номерПоддержки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-i-s-s15-вид-поддержки.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  условие: {
    descriptionKey: 'models.i-i-s-i-s-s15-вид-поддержки.validations.условие.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВидПоддержкиE', 'i-i-s-i-s-s15-вид-поддержки', {
    наименование: attr('Наименование', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    номерПоддержки: attr('Номер поддержки', { index: 2 }),
    пользователь: belongsTo('i-i-s-i-s-s15-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    условие: hasMany('i-i-s-i-s-s15-условие', 'Условие', {
      наименование: attr('Наименование', { index: 0 }),
      номерПоддержки: attr('Номер поддержки', { index: 1 })
    })
  });

  modelClass.defineProjection('ВидПоддержкиL', 'i-i-s-i-s-s15-вид-поддержки', {
    наименование: attr('Наименование', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    номерПоддержки: attr('Номер поддержки', { index: 2 }),
    пользователь: belongsTo('i-i-s-i-s-s15-пользователь', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
