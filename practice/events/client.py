import frappe
from frappe.client import cancel
@frappe.whitelist()  # JavaScript se call hone ke liye
def custom_function(docname):
    # Sales Invoice ka data lo
    cancel("Sales Invoice", docname)
    return f"Sales Invoice {docname} is now is cancel!"
