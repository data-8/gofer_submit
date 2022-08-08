// file gofer_submit/static/index.js

// Needs to be changed on a class by class basis

grading_url = '/services/gofer_nb/'
define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {

        var handler = function () {
            var nb = Jupyter.notebook.toJSON(); // get the ipynb file
            // TODO:  strip the output to send less data
            payload = JSON.stringify({'nb': nb});
            otherParam = {
                headers: {"Content-Type": "application/json"},
                body: payload,
                method: "POST"
            };

            fetch(grading_url, otherParam)
                // processes the response (in this case grabs text)
                .then(response=>{return response.text()})
                // processes the output of previous line (calling it data, then doing something with it)
                .then(data=>{console.log( data); alert(data)});
        };

        var action = {
            icon: 'fa-check', // a font-awesome class used on buttons, etc
            label: 'Submit',
            help    : 'Submit assignment',
            help_index : 'zz',
            handler : handler
        };
        var prefix = 'Gofer';
        var action_name = 'submit';

        var full_action_name = Jupyter.actions.register(action, action_name, prefix); // returns 'Gofer:submit'

        Jupyter.toolbar.add_buttons_group([
            {
                'label' : 'Submit',
                'icon' : 'fa-check',
                'callback': handler
            }]);
        // 8/8/2022: REMOVED DROP DOWN -- no longer supporting multiple courses
        // var existing = Jupyter.notebook.metadata["course"];


        // var select = $('<select class="ui-widget-content"/>');
        // select.change(function() {
        //      var course = $(this).val();
        //      Jupyter.notebook.metadata["course"] = course;
        //      Jupyter.notebook.save_notebook();
        // });

        // var courses = ["8x", "SJCC"];

        // for (var i in courses) {
        //     select.append($('<option/>').attr('value', courses[i]).text(courses[i]));
        // }

        // select.val("8x");

        // if (existing) {
        //   if (!courses.includes(existing)) {
        //     select.append($('<option/>').attr('value', existing).text(existing));
        //   }
        //   select.val(existing);
        // }

        // IPython.toolbar.element.append(
        //     $('<label class="navbar-text"/>').text('Select Course (Don\'t change unless told to):')
        // ).append(select);

    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});
