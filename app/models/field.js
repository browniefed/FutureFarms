App.Field = DS.Model.extend({
	id: attr('number'),
	name: attr('string'),
	crop: DS.hasMany('crop')
})