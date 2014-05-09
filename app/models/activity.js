var DS.attr = attr;
App.Activity = DS.Model.extend({
	description: attr('string'),
	tax: attr('number'), //why is this on activity and not activity cost??
	report: attr('boolean')
});