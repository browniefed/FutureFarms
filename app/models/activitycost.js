var attr = DS.attr;
App.ActivityCost = DS.Model.extend({
	alias: attr('string'),
	effectiveDate: attr('date'),
	ineffectiveDate: attr('date'),
	price: attr('number'),
	salesUnit: attr('string'),
	activity: DS.belongsTo('activity')
})