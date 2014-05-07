var attr = DS.attr;

App.CropField = DS.Model.extend({
	id: attr('number'),
	name: attr('string'), //Actually has a name for pesticide reports
	year: attr('string'),
	sprinklerflow: attr('number'),
	crop: DS.hasMany('crop'),
	field: DS.hasMany('field') //Get all fields involved and sum up acres
})