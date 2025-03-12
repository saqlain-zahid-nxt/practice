frappe.ready(function() {
    // Workspace me shortcut add karega
    frappe.add_custom_button(__('Sales Invoice'), function() {
        frappe.set_route('List', 'Sales Invoice');
        frappe.msgprint("hloooooooooooooooooo")
    }, 'My project');
});
