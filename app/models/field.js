var attr = DS.attr;

App.Field = DS.Model.extend({
	id: attr('number'),
	name: attr('string'),
	acres: attr('number'),
	description: attr('string'),
	operator: DS.hasMany('operator'),
	cropfield: DS.hasMany('field')
});