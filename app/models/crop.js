App.Crop = DS.Model.extend({
	id: attr('number'),
	name: attr('string'),
	field: DS.belongsTo('field');
})