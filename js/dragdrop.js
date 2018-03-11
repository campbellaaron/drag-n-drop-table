var val, employeeName, employeeLogin;

$(document).ready(function () {

    var ouSelect = $('#ouSelect').val();
    var selectionBtn = $('#selection');

    selectionBtn.on('click', function () {
        switch ($('#ouSelect option:selected').val()) {
            case 'retail':
                console.log("Retail selected");
                break;
            case 'primenow':
                console.log("PrimeNew selected");
                break;
            case 'cam':
                console.log("CAM selected");
                break;
            case 'ci-gen':
                console.log("CI Gen selected");
                break;
            case 'tm':
                console.log("Team Manager selected");
                break;
            case 'special-handling':
                console.log("Special Handling selected");
                break;
            default:
                console.log("Nothing selected");
        }    
    });

    $('tbody').sortable({
        placeholder: "drop-zone"
    });

    $('#name').on('change', function () {
        val = $('#name').val();

        employeeName = $('#employeeName');
        employeeName.text(val);
    });

    $('#login').on('change', function () {
        val = $('#login').val();

        employeeLogin = $('#employeeLogin');
        employeeLogin.text(val);
    });

    $("#submit").click(function (e) {
        //getting values of current time for generating the file name
        var dt = new Date();
        var day = dt.getDate();
        var month = dt.getMonth() + 1;
        var year = dt.getFullYear();
        var hour = dt.getHours();
        var mins = dt.getMinutes();
        var postfix = day + "-" + month + "-" + year + "_" + hour + "." + mins;

        console.log(postfix);
        //creating a temporary HTML link element (they support setting file names)
        var a = document.createElement('a');
        //getting data from our div that contains the HTML table
        var data_type = 'data:application/vnd.ms-excel';
        var table_div = document.getElementById('dvData');
        var table_html = table_div.outerHTML.replace(/ /g, '%20');
        a.href = data_type + ', ' + table_html;
        //setting the file name
        a.download = 'exported_table_' + postfix + '.xls';
        //triggering the function
        a.click();
        //just in case, prevent default behaviour
        e.preventDefault();
    });
});
