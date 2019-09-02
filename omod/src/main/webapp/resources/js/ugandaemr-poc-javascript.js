function enable_disable_fm(selected_option) {

    var class_name = jq(selected_option).attr("class");

    var length = class_name.length;

    var class_id = parseInt(class_name.substring(length - 1, length));

    var row_id = class_id;

    var disable = true;
    var disable1 = true;

    var row_1 = '[class^="FamilyMember"][class*="Children1"]';
    var row_2 = '[class^="FamilyMember"][class*="Children2"]';
    var row_3 = '[class^="FamilyMember"][class*="Children3"]';
    var row_4 = '[class^="FamilyMember"][class*="Children4"]';
    var row_5 = '[class^="FamilyMember"][class*="Children5"]';

    var xx = row_1;
    var selected_value = jq(selected_option).find(":selected").text();


    if (selected_value == "P") {
        disable = false;
    }
    else if (selected_value == "Y") {
        disable1 = false;
    }

    switch (row_id) {
        case 1:
            xx = row_1;
            break;
        case 2:
            xx = row_2;
            break;
        case 3:
            xx = row_3;
            break;
        case 4:
            xx = row_4;
            break;
        case 5:
            xx = row_5;
            break;
    }


    jq(xx).each(function () {
        var group = jq(this);
        if (class_name.indexOf('Children') == -1) {
            /* group.find('select').prop("selectedIndex", 0);*/
            group.find('select').attr("disabled", disable);
            if (disable) {
                /* fade out the fields that are disabled*/
                group.find("select").fadeTo(250, 0.25);
            } else {
                /* remove the fade on the fields*/
                group.find("select").fadeTo(250, 1);
            }
        }
        if (class_name.indexOf('GrandChildren') == -1) {
            /* group.find("input").attr("value", "");*/
            group.find("input").attr("disabled", disable1);

            if (disable1) {
                /* fade out the fields that are disabled*/
                group.find("input").fadeTo(250, 0.25);
            } else {
                /* remove the fade on the fields*/
                group.find("input").fadeTo(250, 1);
            }
        }

    });

}
function enable_disable(field, class_name_prefix, conditions, input_type) {

    var class_name = jq(field).attr("class");

    var length = class_name.length;

    var class_id = parseInt(class_name.substring(length - 1, length));
    var childClass = "Child" + class_id;

    var disable = true;
    var requires = true;

    var row = '[class^="' + class_name_prefix + '"][class*="' + childClass + '"]';

    var selected_value = null;

    if (input_type == "select") {
        selected_value = jq(field).find(":selected").text().trim().toLowerCase();
    }
    else if (input_type == "hidden") {
        selected_value = jq(field).find("input[type=hidden]").val().trim().toLowerCase();
    }


    if (eval(conditions)) {
        disable = false;
    }


    jq(row).each(function () {
        var group = jq(this);

        if (class_name.indexOf('Child') == -1) {
            /*group.find("input").attr("value", ""); */
            /* group.find('select').prop("selectedIndex", 0);*/
            group.find("input").attr("disabled", disable);
            group.find('select').attr("disabled", disable);

            if (disable) {
                /* fade out the fields that are disabled */
                group.find("input").fadeTo(250, 0.25);
                group.find("select").fadeTo(250, 0.25);
            } else {
                /* remove the fade on the fields */
                group.find("input").fadeTo(250, 1);
                group.find("select").fadeTo(250, 1);
            }
        }
    });
}