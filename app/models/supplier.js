var attr = DS.attr;

App.Supplier = DS.Model.extend({
	id: attr('number'),
	supplierNo: attr('string'),
	name: attr('string'),
	alias: attr('string')
})