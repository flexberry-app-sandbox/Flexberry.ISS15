import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  номерПоддержки: DS.attr('string'),
  видПоддержки: DS.belongsTo('i-i-s-i-s-s15-вид-поддержки', { inverse: 'условие', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s15-условие.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПоддержки: {
    descriptionKey: 'models.i-i-s-i-s-s15-условие.validations.номерПоддержки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  видПоддержки: {
    descriptionKey: 'models.i-i-s-i-s-s15-условие.validations.видПоддержки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УсловиеE', 'i-i-s-i-s-s15-условие', {
    наименование: attr('Наименование', { index: 0 }),
    номерПоддержки: attr('Номер поддержки', { index: 1 })
  });

  modelClass.defineProjection('УсловиеL', 'i-i-s-i-s-s15-условие', {
    наименование: attr('', { index: 0 })
  });
};
