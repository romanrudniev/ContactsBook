document.addEventListener("DOMContentLoaded", function() {
    let selectedContactId = null
    let selectedRow = null;

    const rows = this.document.querySelectorAll(".contact-row");
    const editButton = document.getElementById("editButton");
    //const hiddenInput = this.document.getElementById("selectedContact");

    rows.forEach(row => {
        row.addEventListener("click", function(){
        if (selectedRow) {
            selectedRow.classList.remove("table-active");
        }
        selectedRow = this;
        selectedRow.classList.add("table-active")

        selectedContactId = this.dataset.contactId;

        editButton.href = `/edit/${selectedContactId}`;

        });
    });
});