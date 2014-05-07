var attr = DS.attr;

App.PPN = DS.Model.extend({
	id: attr('number'),
	ppn: attr('string'),
	year: attr('string'),
	operator: DS.hasOne('operator'),
	cropyear: DS.hasOne('cropyear')
})