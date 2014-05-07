var attr = DS.attr;

App.Crop = DS.Model.extend({
	id: attr('number'),
	name: attr('string'),
	cropfield: DS.hasMany('cropfield')
})