// Copyright (c) 2019, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on("Notification Settings", {
	custom_enable_sound(frm){
		if(frm.doc.custom_enable_sound)
			{
				frm.set_value('custom_enable_alert_message', 0);
			}
	},
	after_save: function(frm) {
		frappe.ui.toolbar.clear_cache()
	},
});
