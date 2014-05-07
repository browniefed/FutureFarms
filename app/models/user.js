var attr = DS.attr;

App.User = DS.Model.extend({
	username: attr('string'),
	email: attr('string'),
	isAdmin: attr('boolean'),
	hash: attr('string')
})