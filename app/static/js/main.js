document.addEventListener("DOMContentLoaded", function() {

//    window.toggleDetails = function(row) {
//    const contactId = row.dataset.contactIf;
//    const detailsRow = document.getElementById('details-' + contactId);
//
//    if (detailsRow.style.display ==='none') {
//        detailsRow.style.display ==='table-row'
//    } else {
//        detailsRow.style.display ==='none'
//    }
//  }
  let selectedRow = null;
  let selectedContactId = null;

  const rows = document.querySelectorAll(".contact-row");
  const editButton = document.getElementById("editButton");
  const aboutButton = document.getElementById("aboutButton");
  const deleteButton = document.getElementById("deleteButton");

  rows.forEach(row => {
    row.addEventListener("click", function () {
      if (selectedRow) {
        selectedRow.classList.remove("table-active");
      }
      selectedRow = this;
      selectedRow.classList.add("table-active");

      selectedContactId = this.dataset.contactId;

      if (editButton) {
        editButton.href = `edit/${selectedContactId}/`;
      }
      if (aboutButton) {
        aboutButton.href = `about/${selectedContactId}/`;
      }
      if (deleteButton) {
        deleteButton.href = `delete/${selectedContactId}/`;
      }
    });
  });
});
