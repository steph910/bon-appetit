var zipcode;
var dietList = [];

$('#zipcode-input').change(function() {
    zipcode = $('#zipcode-input').val();
    console.log("Zipcode changed: ");
    console.log(zipcode);
});

$('#diet-list :checkbox').change(function() {
    dietList = $('input[name="diet[]"]:checked').map(function() {
        return this.id;
    }).get();
    console.log("Dietary preferences changed:")
    console.log(dietList);
});
