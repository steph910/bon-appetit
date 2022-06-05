$('#zipcode-input').change(function() {
    zipcode = $('#zipcode-input').val();
    console.log("Zipcode changed: ");
    console.log(zipcode);
    localStorage.setItem("BAzipcode", zipcode);
});

$('#diet-list :checkbox').change(function() {
    let categories = $('input[name="diet[]"]:checked').map(function() {
        return this.id;
    }).get();
    console.log("Dietary preferences changed:")
    console.log(categories);
    localStorage.setItem("BAcategories", categories);
});

$('#accomodations-list :checkbox').change(function() {
    let attributes = $('input[name="attribute[]"]:checked').map(function() {
        return this.id;
    }).get();
    console.log("Accomodations (attribute[]) changed:")
    console.log(attributes);
    localStorage.setItem("BAattributes", attributes);
});

document.querySelector("#preferences-form").onsubmit = function(event){
    localStorage.setItem("BAreturning", true);
}
