

frappe.ui.form.on('Sales Invoice', {
    refresh: function (frm) {
        // frm.add_custom_button('Click Me', function () {
        //     frappe.call({
        //         method: "practice.events.client.custom_function",
        //         args: {
        //             docname: frm.doc.name
        //         },
        //         callback: function (response) {
        //             frappe.msgprint(response.message);
        //         }
        //     });
        // },); // 'Actions' group me button dikhayega
        frm.add_custom_button('Click Me', function () {
            frappe.call({
                method: "frappe.client.cancel",
                args: {
                    doctype: "Sales Invoice",
                    name: frm.doc.name
                },
                callback: function (response) {
                    frappe.msgprint(response.message);
                }
            });
        },); // 'Actions' group me button dikhayega
    }
});
